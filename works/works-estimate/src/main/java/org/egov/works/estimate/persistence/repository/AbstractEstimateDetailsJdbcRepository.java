package org.egov.works.estimate.persistence.repository;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.egov.common.persistence.repository.JdbcRepository;
import org.egov.works.estimate.persistence.entity.AbstractEstimateDetailsEntity;
import org.egov.works.estimate.web.contract.AbstractEstimateDetailsSearchContract;
import org.egov.works.estimate.web.model.AbstractEstimateDetails;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Service;

@Service
public class AbstractEstimateDetailsJdbcRepository extends JdbcRepository {

	public static final String TABLE_NAME = "egw_abstractestimate_details";

	public List<AbstractEstimateDetails> search(
			AbstractEstimateDetailsSearchContract abstractEstimateDetailsSearchContract) {
		String searchQuery = "select :selectfields from :tablename :condition  :orderby   ";

		Map<String, Object> paramValues = new HashMap<>();
		StringBuffer params = new StringBuffer();

		if (abstractEstimateDetailsSearchContract.getSortBy() != null
				&& !abstractEstimateDetailsSearchContract.getSortBy().isEmpty()) {
			validateSortByOrder(abstractEstimateDetailsSearchContract.getSortBy());
			validateEntityFieldName(abstractEstimateDetailsSearchContract.getSortBy(), AbstractEstimateDetails.class);
		}

		String orderBy = "order by id";
		if (abstractEstimateDetailsSearchContract.getSortBy() != null
				&& !abstractEstimateDetailsSearchContract.getSortBy().isEmpty()) {
			orderBy = "order by " + abstractEstimateDetailsSearchContract.getSortBy();
		}

		searchQuery = searchQuery.replace(":tablename", TABLE_NAME);

		searchQuery = searchQuery.replace(":selectfields", " * ");

		if (abstractEstimateDetailsSearchContract.getTenantId() != null) {
			if (params.length() > 0) {
				params.append(" and ");
			}
			params.append("tenantId =:tenantId");
			paramValues.put("tenantId", abstractEstimateDetailsSearchContract.getTenantId());
		}
		if (abstractEstimateDetailsSearchContract.getIds() != null) {
			if (params.length() > 0) {
				params.append(" and ");
			}
			params.append("id in(:ids) ");
			paramValues.put("ids", abstractEstimateDetailsSearchContract.getIds());
		}

		if (abstractEstimateDetailsSearchContract.getAbstractEstimateIds() != null) {
			if (params.length() > 0) {
				params.append(" and ");
			}
			params.append("abstractEstimate in(:estimateIds) ");
			paramValues.put("estimateIds", abstractEstimateDetailsSearchContract.getAbstractEstimateIds());
		}
		if (abstractEstimateDetailsSearchContract.getEstimateNumbers() != null) {
			if (params.length() > 0) {
				params.append(" and ");
			}
			params.append("estimateNumber in (:estimateNumbers)");
			paramValues.put("estimateNumbers", abstractEstimateDetailsSearchContract.getEstimateNumbers());
		}
		if (abstractEstimateDetailsSearchContract.getWorkIdentificationNumbers() != null) {
			if (params.length() > 0) {
				params.append(" and ");
			}
			params.append("projectCode in (select id from egw_projectcode where code in (:workIdentificationNumbers))");
			paramValues.put("workIdentificationNumbers",
					abstractEstimateDetailsSearchContract.getWorkIdentificationNumbers());
		}

		if (params.length() > 0) {

			searchQuery = searchQuery.replace(":condition", " where " + params.toString());

		} else

			searchQuery = searchQuery.replace(":condition", "");

		searchQuery = searchQuery.replace(":orderby", orderBy);

		BeanPropertyRowMapper row = new BeanPropertyRowMapper(AbstractEstimateDetailsEntity.class);

		List<AbstractEstimateDetailsEntity> abstractEstimateDetailsEntities = namedParameterJdbcTemplate
				.query(searchQuery.toString(), paramValues, row);

		List<AbstractEstimateDetails> abstractEstimateDetails = new ArrayList<>();

		for (AbstractEstimateDetailsEntity abstractEstimateDetailsEntity : abstractEstimateDetailsEntities) {
			abstractEstimateDetails.add(abstractEstimateDetailsEntity.toDomain());
		}

		return abstractEstimateDetails;
	}

}
