package org.egov.lcms.models;

import java.util.List;

import org.egov.common.contract.request.RequestInfo;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * 
 * @author Prasad
 *	This object holds information about the Summon Request
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SummonRequest {
	@JsonProperty("requestInfo")
	private RequestInfo requestInfo = null;

	@JsonProperty("summons")
	private List<Summon> summons = null;
}