package org.egov.pt.calculator.web.models;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.egov.common.contract.request.RequestInfo;
import org.springframework.validation.annotation.Validated;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * CalculationReq
 */
@Validated
@javax.annotation.Generated(value = "org.egov.codegen.SpringBootCodegen", date = "2018-05-14T00:55:55.623+05:30")

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class CalculationReq   {
        private RequestInfo requestInfo = null;

        @Valid
        private List<CalculationCriteria> calculationCriteria = new ArrayList<>();


        public CalculationReq addCalulationCriteriaItem(CalculationCriteria calulationCriteriaItem) {
        this.calculationCriteria.add(calulationCriteriaItem);
        return this;
        }

}

