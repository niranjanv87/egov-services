package org.egov.tl.commons.web.contract;

import java.math.BigDecimal;
import java.util.List;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import org.egov.tl.commons.web.contract.enums.BusinessNatureEnum;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * This class describe the set of fields contained in a Trade license category
 * 
 * @author Pavan Kumar Kamma
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Category {

	private Long id = null;
    
	@Pattern(regexp = ".*[^ ].*")
	@JsonProperty("tenantId")
	@NotNull
	@Size(min = 4, max = 128)
	private String tenantId = null;

	@Pattern(regexp = ".*[^ ].*")
	@NotNull
	@Size(min = 4, max = 100)
	private String name = null;

	@Pattern(regexp = ".*[^ ].*")
	@NotNull
	@Size(min = 4, max = 20)
	private String code = null;
	
	
	
	private Long validityYears = null;

	private Long parentId = null;
	
	private Boolean active = true;

	private BusinessNatureEnum businessNature = null;

	private List<CategoryDetail> details;

	@JsonProperty("auditDetails")
	private AuditDetails auditDetails = null;
}