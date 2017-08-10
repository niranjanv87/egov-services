package org.egov.pgr.web.contract;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.egov.common.contract.request.RequestInfo;
import org.egov.pgr.domain.model.Attribute;
import org.egov.pgr.domain.model.AuditDetails;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotNull;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ServiceType {

    private Long id;
    private String serviceName;
    private String serviceCode;
    private String description;
    private boolean metadata;
    private Integer department;
    private String type;
    private List<String> keywords;
    private Integer category;
    private List<String> config;
    private Integer slaHours;
    private String tenantId;
    private Boolean days;
    private Boolean active;
    private boolean hasFinancialImpact;
    private List<AttributeDefinition> attributes;

    public ServiceType(org.egov.pgr.domain.model.ServiceType serviceType,
                       List<org.egov.pgr.domain.model.AttributeDefinition> attributeDefinitions) {
        this.serviceName = serviceType.getServiceName();
        this.active = serviceType.getActive();
        this.category = serviceType.getCategory();
        this.days = serviceType.getIsDay();
        this.department = serviceType.getDepartment();
        this.description = serviceType.getDescription();
        this.hasFinancialImpact = serviceType.isHasFinancialImpact();
        this.metadata = serviceType.isMetadata();
        this.serviceCode = serviceType.getServiceCode();
        this.tenantId = serviceType.getTenantId();
        this.keywords = serviceType.getKeywords();
        this.type = serviceType.getType();
        this.slaHours = serviceType.getSlaHours();
        this.attributes = mapAttributes(attributeDefinitions);
    }

    private List<AttributeDefinition> mapAttributes(
            List<org.egov.pgr.domain.model.AttributeDefinition> attributes){
        if (null == attributes) {
            return Collections.emptyList();
        }

        return attributes.stream()
                .map(AttributeDefinition::new)
                .collect(Collectors.toList());
    }
}