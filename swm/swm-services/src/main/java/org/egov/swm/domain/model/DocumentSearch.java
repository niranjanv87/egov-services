package org.egov.swm.domain.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DocumentSearch extends Document {
    private String refCodes;
    private String sortBy;
    private Integer pageSize;
    private Integer offset;
}