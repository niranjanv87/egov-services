package org.egov.tradelicense.persistence.repository;

import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.egov.tl.commons.web.contract.AuditDetails;
import org.egov.tl.commons.web.contract.Category;
import org.egov.tl.commons.web.contract.CategoryDetail;
import org.egov.tl.commons.web.contract.enums.FeeTypeEnum;
import org.egov.tl.commons.web.contract.enums.RateTypeEnum;
import org.egov.tradelicense.config.PropertiesManager;
import org.egov.tradelicense.persistence.repository.builder.CategoryQueryBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

/**
 * Repository class for create/update/search category master
 * 
 * @author Pavan Kumar Kamma
 *
 */

@Repository
public class CategoryRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private PropertiesManager propertiesManager;

	/**
	 * Description : this method will create category in database
	 * 
	 * @param Category
	 * @return categoryId
	 */
	public Long createCategory(Category category) {

		AuditDetails auditDetails = category.getAuditDetails();
		String categoryInsert = CategoryQueryBuilder.INSERT_CATEGORY_QUERY;

		final PreparedStatementCreator psc = new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(final Connection connection) throws SQLException {
				final PreparedStatement ps = connection.prepareStatement(categoryInsert, new String[] { "id" });

				ps.setString(1, category.getTenantId());
				ps.setString(2, category.getName());
				ps.setString(3, category.getCode());
				ps.setBoolean(4, (category.getActive() == null ? true : category.getActive()));
				ps.setObject(5, category.getParentId());

				if (category.getBusinessNature() == null) {
					ps.setString(6, null);
				} else {
					ps.setString(6, category.getBusinessNature().name());
				}
				
				if( category.getValidityYears() == null ){
					ps.setLong(7, 0);
				}else{
					ps.setLong(7, category.getValidityYears());
				}
				
				ps.setString(8, auditDetails.getCreatedBy());
				ps.setString(9, auditDetails.getLastModifiedBy());
				ps.setLong(10, auditDetails.getCreatedTime());
				ps.setLong(11, auditDetails.getLastModifiedTime());
				return ps;
			}
		};

		// The newly generated key will be saved in this object
		final KeyHolder holder = new GeneratedKeyHolder();
		jdbcTemplate.update(psc, holder);

		return Long.valueOf(holder.getKey().intValue());

	}

	/**
	 * Description : this method will create categoryDetail in database
	 * 
	 * @param CategoryDetail
	 * @return CategoryDetailId
	 */
	public Long createCategoryDetail(CategoryDetail categoryDetail) {

		String categoryDetailInsert = CategoryQueryBuilder.INSERT_CATEGORY_DETAIL_QUERY;
		AuditDetails auditDetails = categoryDetail.getAuditDetails();

		final PreparedStatementCreator psc = new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(final Connection connection) throws SQLException {
				final PreparedStatement ps = connection.prepareStatement(categoryDetailInsert, new String[] { "id" });

				ps.setLong(1, categoryDetail.getCategoryId());
				ps.setString(2, categoryDetail.getFeeType().toString());
				ps.setString(3, categoryDetail.getRateType().toString());
				ps.setLong(4, categoryDetail.getUomId());
				ps.setString(5, auditDetails.getCreatedBy());
				ps.setString(6, auditDetails.getLastModifiedBy());
				ps.setLong(7, auditDetails.getCreatedTime());
				ps.setLong(8, auditDetails.getLastModifiedTime());
				return ps;
			}
		};

		// The newly generated key will be saved in this object
		final KeyHolder holder = new GeneratedKeyHolder();
		jdbcTemplate.update(psc, holder);

		return Long.valueOf(holder.getKey().intValue());
	}

	/**
	 * Description : this method for update category in database
	 * 
	 * @param Category
	 * @return Category
	 */
	public Category updateCategory(Category category) {

		AuditDetails auditDetails = category.getAuditDetails();
		String categoryUpdateSql = CategoryQueryBuilder.UPDATE_CATEGORY_QUERY;

		final PreparedStatementCreator psc = new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(final Connection connection) throws SQLException {
				final PreparedStatement ps = connection.prepareStatement(categoryUpdateSql);

				ps.setString(1, category.getTenantId());
				ps.setString(2, category.getName());
				ps.setString(3, category.getCode());
				ps.setBoolean(4, (category.getActive() == null ? true : category.getActive()));
				ps.setObject(5, category.getParentId());

				if (category.getBusinessNature() == null) {
					ps.setString(6, null);
				} else {
					ps.setString(6, category.getBusinessNature().name());
				}
				if( category.getValidityYears() == null ){
					ps.setLong(7, 0);
				}else{
					ps.setLong(7, category.getValidityYears());
				}
				ps.setString(8, category.getAuditDetails().getLastModifiedBy());
				ps.setLong(9, auditDetails.getLastModifiedTime());
				ps.setLong(10, category.getId());

				return ps;
			}
		};

		jdbcTemplate.update(psc);
		return category;
	}

	/**
	 * Description : this method for update categoryDetail in database
	 * 
	 * @param CategoryDetail
	 * @return CategoryDetail
	 */
	public CategoryDetail updateCategoryDetail(CategoryDetail categoryDetail) {

		String categoryDetailsUpdateSql = CategoryQueryBuilder.UPDATE_CATEGORY_DETAIL_QUERY;
		AuditDetails auditDetails = categoryDetail.getAuditDetails();

		final PreparedStatementCreator psc = new PreparedStatementCreator() {
			@Override
			public PreparedStatement createPreparedStatement(final Connection connection) throws SQLException {
				final PreparedStatement ps = connection.prepareStatement(categoryDetailsUpdateSql);

				ps.setLong(1, categoryDetail.getCategoryId());
				ps.setString(2, categoryDetail.getFeeType().toString());
				ps.setString(3, categoryDetail.getRateType().toString());
				ps.setLong(4, categoryDetail.getUomId());
				ps.setString(5, auditDetails.getLastModifiedBy());
				ps.setLong(6, auditDetails.getLastModifiedTime());
				ps.setLong(7, categoryDetail.getId());

				return ps;
			}
		};

		jdbcTemplate.update(psc);
		return categoryDetail;
	}

	/**
	 * Description : this method for search category
	 * 
	 * @param tenantId
	 * @param ids
	 * @param name
	 * @param code
	 * @param pageSize
	 * @param offSet
	 * @return List<Category>
	 */
	public List<Category> searchCategory(String tenantId, Integer[] ids, String name, String code, String active,
			String type, String businessNature, Integer categoryId, String rateType, String feeType,
			Integer uomId, Integer pageSize, Integer offSet) {

		List<Object> preparedStatementValues = new ArrayList<>();

		if (pageSize == null) {
			pageSize = Integer.valueOf(propertiesManager.getDefaultPageSize());
		}
		if (offSet == null) {
			offSet = Integer.valueOf(propertiesManager.getDefaultOffset());
		}

		String categorySearchQuery = CategoryQueryBuilder.buildSearchQuery(tenantId, ids, name, code, active, type,
				businessNature, categoryId, rateType, feeType, uomId, pageSize, offSet, preparedStatementValues);
		List<Category> categories = getCategories(categorySearchQuery.toString(), preparedStatementValues);

		return categories;
	}

	/**
	 * Description : this method for search CategoryDetail of a category
	 * 
	 * @param categoryId
	 * @param pageSize
	 * @param offSet
	 * @return List<CategoryDetail>
	 */
	public List<CategoryDetail> getCategoryDetailsByCategoryId(Long categoryId, Integer pageSize, Integer offSet) {

		List<Object> preparedStatementValues = new ArrayList<>();

		if (pageSize == null) {
			pageSize = Integer.valueOf(propertiesManager.getDefaultPageSize());
		}
		if (offSet == null) {
			offSet = Integer.valueOf(propertiesManager.getDefaultOffset());
		}
		String categoryDetailSearchQuery = CategoryQueryBuilder.buildCategoryDetailSearchQuery(categoryId, pageSize,
				offSet, preparedStatementValues);
		List<CategoryDetail> categoryDetails = getCategoryDetails(categoryDetailSearchQuery.toString(),
				preparedStatementValues);

		return categoryDetails;
	}

	/**
	 * This method will execute the given query & will build the CategoryDetail
	 * object
	 * 
	 * @param query
	 * @return {@link CategoryDetail} List of CategoryDetail
	 */
	private List<CategoryDetail> getCategoryDetails(String query, List<Object> preparedStatementValues) {

		List<CategoryDetail> categoryDetails = new ArrayList<>();
		List<Map<String, Object>> rows = jdbcTemplate.queryForList(query, preparedStatementValues.toArray());

		for (Map<String, Object> row : rows) {

			CategoryDetail categoryDetail = new CategoryDetail();
			categoryDetail.setId(getLong(row.get("id")));
			categoryDetail.setCategoryId(getLong(row.get("categoryId")));
			categoryDetail.setFeeType(FeeTypeEnum.fromValue(getString(row.get("feeType"))));
			categoryDetail.setRateType(RateTypeEnum.fromValue(getString(row.get("rateType"))));
			categoryDetail.setUomId(getLong(row.get("uomId")));
			AuditDetails auditDetails = new AuditDetails();
			auditDetails.setCreatedBy(getString(row.get("createdby")));
			auditDetails.setLastModifiedBy(getString(row.get("lastmodifiedby")));
			auditDetails.setCreatedTime(getLong(row.get("createdtime")));
			auditDetails.setLastModifiedTime(getLong(row.get("lastmodifiedtime")));
			categoryDetail.setAuditDetails(auditDetails);

			categoryDetails.add(categoryDetail);
		}

		return categoryDetails;
	}

	/**
	 * This method will execute the given query & will build the Category object
	 * 
	 * @param query
	 * @return {@link Category} List of Category
	 */
	private List<Category> getCategories(String query, List<Object> preparedStatementValues) {

		List<Category> categories = new ArrayList<>();
		List<Map<String, Object>> rows = jdbcTemplate.queryForList(query, preparedStatementValues.toArray());

		for (Map<String, Object> row : rows) {

			Category category = new Category();
			category.setId(getLong(row.get("id")));
			category.setTenantId(getString(row.get("tenantid")));
			category.setCode(getString(row.get("code")));
			category.setName(getString(row.get("name")));
			category.setActive(getBoolean(row.get("active")));
			if (getLong(row.get("parentId")) == 0) {
				category.setParentId(null);
			} else {
				category.setParentId(getLong(row.get("parentId")));
			}
			category.setValidityYears( getLong( row.get("validityYears")));
			AuditDetails auditDetails = new AuditDetails();
			auditDetails.setCreatedBy(getString(row.get("createdby")));
			auditDetails.setLastModifiedBy(getString(row.get("lastmodifiedby")));
			auditDetails.setCreatedTime(getLong(row.get("createdtime")));
			auditDetails.setLastModifiedTime(getLong(row.get("lastmodifiedtime")));
			category.setAuditDetails(auditDetails);

			categories.add(category);

		}

		return categories;
	}

	/**
	 * This method will cast the given object to String
	 * 
	 * @param object
	 *            that need to be cast to string
	 * @return {@link String}
	 */
	private String getString(Object object) {
		return object == null ? "" : object.toString();
	}

	/**
	 * This method will cast the given object to double
	 * 
	 * @param object
	 *            that need to be cast to Double
	 * @return {@link Double}
	 */
	@SuppressWarnings("unused")
	private Double getDouble(Object object) {
		return object == null ? 0.0 : Double.parseDouble(object.toString());
	}

	/**
	 * This method will cast the given object to Long
	 * 
	 * @param object
	 *            that need to be cast to Long
	 * @return {@link Long}
	 */
	private Long getLong(Object object) {
		return object == null ? 0 : Long.parseLong(object.toString());
	}

	/**
	 * This method will cast the given object to Boolean
	 * 
	 * @param object
	 *            that need to be cast to Boolean
	 * @return {@link boolean}
	 */
	private Boolean getBoolean(Object object) {
		return object == null ? Boolean.FALSE : (Boolean) object;
	}
}
