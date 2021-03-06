package org.egov.tl.masters.interceptor;

import java.util.Collections;
import java.util.List;

import org.egov.tl.masters.common.contract.RequestContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.web.client.RestTemplate;

public class CorrelationIdAwareRestTemplate extends RestTemplate {

	public CorrelationIdAwareRestTemplate() {
		this.setInterceptors(customInterceptors());
	}

	private List<ClientHttpRequestInterceptor> customInterceptors() {
		return Collections.singletonList(correlationIdInterceptor());
	}

	private ClientHttpRequestInterceptor correlationIdInterceptor() {
		return (httpRequest, bytes, clientHttpRequestExecution) -> {
			final HttpHeaders headers = httpRequest.getHeaders();
			headers.put(RequestContext.CORRELATION_ID, Collections.singletonList(RequestContext.getId()));

			return clientHttpRequestExecution.execute(httpRequest, bytes);
		};
	}
}
