package org.egov.works.workorder.web.contract;

import java.util.Objects;

import io.swagger.annotations.ApiModel;

/**
 * An Object that holds the basic data for Contractor Advance Requisition
 */
@ApiModel(description = "An Object that holds the basic data for Contractor Advance Requisition")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2017-11-21T10:42:18.195Z")

public class ContractorAdvanceRequisition extends AdvanceRequisition {

	@Override
	public boolean equals(java.lang.Object o) {
		if (this == o) {
			return true;
		}
		if (o == null || getClass() != o.getClass()) {
			return false;
		}
		return true;
	}

	@Override
	public int hashCode() {
		return Objects.hash(super.hashCode());
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append("class ContractorAdvanceRequisition {\n");
		sb.append("    ").append(toIndentedString(super.toString())).append("\n");
		sb.append("}");
		return sb.toString();
	}

	/**
	 * Convert the given object to string with each line indented by 4 spaces
	 * (except the first line).
	 */
	private String toIndentedString(java.lang.Object o) {
		if (o == null) {
			return "null";
		}
		return o.toString().replace("\n", "\n    ");
	}
}
