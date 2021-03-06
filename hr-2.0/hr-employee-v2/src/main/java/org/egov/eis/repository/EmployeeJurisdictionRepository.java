/*
 * eGov suite of products aim to improve the internal efficiency,transparency,
 * accountability and the service delivery of the government  organizations.
 *
 *  Copyright (C) 2016  eGovernments Foundation
 *
 *  The updated version of eGov suite of products as by eGovernments Foundation
 *  is available at http://www.egovernments.org
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program. If not, see http://www.gnu.org/licenses/ or
 *  http://www.gnu.org/licenses/gpl.html .
 *
 *  In addition to the terms of the GPL license to be adhered to in using this
 *  program, the following additional terms are to be complied with:
 *
 *      1) All versions of this program, verbatim or modified must carry this
 *         Legal Notice.
 *
 *      2) Any misrepresentation of the origin of the material is prohibited. It
 *         is required that all modified versions of this material be marked in
 *         reasonable ways as different from the original version.
 *
 *      3) This license does not grant any rights to any user of the program
 *         with regards to rights under trademark law for use of the trade names
 *         or trademarks of eGovernments Foundation.
 *
 *  In case of any queries, you can reach eGovernments Foundation at contact@egovernments.org.
 */

package org.egov.eis.repository;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.egov.eis.model.Employee;
import org.egov.eis.repository.rowmapper.EmployeeJurisdictionMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class EmployeeJurisdictionRepository {

	public static final Logger LOGGER = LoggerFactory.getLogger(EmployeeJurisdictionRepository.class);

	public static final String INSERT_EMPLOYEE_JURISDICTION_QUERY = "INSERT INTO egeis_employeeJurisdictions"
			+ " (id, employeeId, jurisdictionId, tenantId)"
			+ " VALUES (NEXTVAL('seq_egeis_employeeJurisdictions'),?,?,?)";

	public static final String DELETE_QUERY = "DELETE FROM egeis_employeeJurisdictions"
			+ " WHERE jurisdictionId IN (:jurisdictionId) and employeeId = :employeeId and tenantId = :tenantId";

	public static final String SELECT_BY_EMPLOYEEID_QUERY = "SELECT" + " jurisdictionid"
			+ " FROM egeis_employeejurisdictions" + " WHERE employeeId = ? AND tenantId = ? ";

	public static final String CHECK_IF_ID_EXISTS_QUERY = "SELECT id FROM egeis_employeeJurisdictions where "
			+ "jurisdictionId=? and employeeId=? and tenantId=?";

	@Autowired
	private EmployeeJurisdictionMapper employeeJurisdictionMapper;

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	/**
	 * @param namedParameterJdbcTemplate
	 *            the namedParameterJdbcTemplate to set
	 */
	public void setNamedParameterJdbcTemplate(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
	}

	public void save(Employee employee) {
		List<Long> employeeJurisdictions = employee.getJurisdictions();
		jdbcTemplate.batchUpdate(INSERT_EMPLOYEE_JURISDICTION_QUERY, new BatchPreparedStatementSetter() {
			@Override
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				Long jurisdictionId = employeeJurisdictions.get(i);
				ps.setLong(1, employee.getId());
				ps.setLong(2, jurisdictionId);
				ps.setString(3, employee.getTenantId());
			}

			@Override
			public int getBatchSize() {
				return employeeJurisdictions.size();
			}
		});
	}

	public void insert(Long jurisdictionId, Long empId, String tenantId) {

		jdbcTemplate.update(INSERT_EMPLOYEE_JURISDICTION_QUERY, empId, jurisdictionId, tenantId);
	}

	public List<Long> findByEmployeeId(Long id, String tenantId) {
		try {
			return jdbcTemplate.query(SELECT_BY_EMPLOYEEID_QUERY, new Object[] { id, tenantId },
					employeeJurisdictionMapper);
		} catch (EmptyResultDataAccessException e) {
			return null;
		}
	}

	public void delete(List<Long> jurisdictionsIdsToDelete, Long employeeId, String tenantId) {

		Map<String, Object> namedParameters = new HashMap<>();
		namedParameters.put("jurisdictionId", jurisdictionsIdsToDelete);
		namedParameters.put("employeeId", employeeId);
		namedParameters.put("tenantId", tenantId);

		namedParameterJdbcTemplate.update(DELETE_QUERY, namedParameters);
	}
}