var dat = {
	"wc.create": {
		"numCols": 12/3,
		"url": "/wcms/masters/pipesize/_create",
		"tenantIdRequired": true,
		"objectName": "pipeSize",
		"groups": [
			{
				"label": "wc.create.pipeSize.title",
				"name": "createpipeSize",
				"fields": [
						{
							"name": "name",
							"jsonPath": "pipeSize.sizeInMilimeter",
							"label": "wc.create.mm",
							"pattern": "^\\d+(\\.\\d+)?$",
							"type": "number",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "Please Enter valid Number",
							"patternErrMsg": "",
							"depedants":[{
									"jsonPath":"pipeSize.sizeInInch",
									"type":"textField",
									"pattern":"`${getVal('pipeSize.sizeInMilimeter')!=''?getVal('pipeSize.sizeInMilimeter'):0} * 0.039370`",
									"rg":"",
									"isRequired": false,
									"requiredErrMsg": "",
									"patternErrMsg": ""
								}]
						},
						{
							"name": "description",
							"jsonPath": "pipeSize.sizeInInch",
							"label": "wc.create.groups.connectionDetails.hscPipeSizeType",
							"pattern": "^[\s.]*([^\s.][\s.]*){0,250}$",
							"type": "number",
							"isRequired": false,
							"isDisabled": true,
							"requiredErrMsg": "",
							"patternErrMsg": "Length is more than 250"
						},
            {
							"name": "description",
							"jsonPath": "pipeSize.description",
							"label": "wc.create.description",
							"pattern": "",
							"type": "text",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "Active",
							"jsonPath": "pipeSize.active",
							"label": "wc.create.active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": false,
							"defaultValue":true,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		]
	},
	"wc.search": {
		"numCols": 12/3,
		"url": "/wcms/masters/pipesize/_search",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "PipeSize",
		"groups": [
			{
				"label": "wc.search.PipeSize.title",
				"name": "searchPipeSize",
				"fields": [
						{
							"name": "name",
							"jsonPath": "sizeInMilimeter",
							"label": "wc.create.mm",
							"pattern": "",
							"type": "text",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "Active",
							"jsonPath": "active",
							"label": "wc.create.active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		],
		"result": {
			"header": [{label: "wc.create.code"},{label: "wc.create.sizeInInch"},{label: "wc.create.sizeInMilimeter"}, {label: "wc.create.description"}, {label: "wc.create.active"}],
			"values": ["code", "sizeInInch", "sizeInMilimeter","description","active"],
			"resultPath": "PipeSizes",
			"rowClickUrlUpdate": "/update/wc/pipeSize/{id}",
			"rowClickUrlView": "/view/wc/pipeSize/{id}"
			}
	},
	"wc.view": {
		"numCols": 12/3,
		"url": "/wcms/masters/pipesize/_search?id={id}",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"objectName": "PipeSizes",
		"groups": [
			{
				"label": "wc.view.PipeSize.title",
				"name": "viewPipeSize",
				"fields": [
						{
							"name": "code",
							"jsonPath": "PipeSizes[0].code",
							"label": "wc.create.code",
							"pattern": "",
							"type": "text",
							"isRequired": true,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "sizeInMilimeter",
							"jsonPath": "PipeSizes[0].sizeInMilimeter",
							"label": "wc.create.mm",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "sizeInInch",
							"jsonPath": "PipeSizes[0].sizeInInch",
							"label": "wc.create.groups.connectionDetails.hscPipeSizeType",
							"pattern": "",
							"type": "text",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "description",
							"jsonPath": "PipeSizes[0].description",
							"label": "wc.create.description",
							"pattern": "",
							"type": "text",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						},
						{
							"name": "active",
							"jsonPath": "PipeSizes[0].active",
							"label": "wc.create.active",
							"pattern": "",
							"type": "checkbox",
							"isRequired": false,
							"isDisabled": false,
							"requiredErrMsg": "",
							"patternErrMsg": ""
						}
				]
			}
		]
	},
	"wc.update": {
		"numCols": 12/3,
		"searchUrl": "/wcms/masters/pipesize/_search?id={id}",
		"url":"/wcms/masters/pipesize/{PipeSize.code}/_update",
		"tenantIdRequired": true,
		"useTimestamp": true,
		"isResponseArray":true,
		"objectName": "PipeSize",
		"groups": [
			{
				"label": "wc.update.pipesize.title",
				"name": "updatePipeSize",
				"fields": [
					{
						"name": "name",
						"jsonPath": "PipeSize.sizeInMilimeter",
						"label": "wc.create.mm",
						"pattern": "",
						"type": "number",
						"isRequired": true,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": "",
						"depedants":[{
								"jsonPath":"PipeSize.sizeInInch",
								"type":"textField",
								"pattern":"`${getVal('PipeSize.sizeInMilimeter')!=''?getVal('PipeSize.sizeInMilimeter'):0} * 0.039370`",
								"rg":"",
								"isRequired": false,
								"requiredErrMsg": "",
								"patternErrMsg": ""
							}]
					},
					{
						"name": "sizeInInch",
						"jsonPath": "PipeSize.sizeInInch",
						"label": "wc.create.groups.connectionDetails.hscPipeSizeType",
						"pattern": "",
						"type": "number",
						"isRequired": false,
						"isDisabled": true,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
					{
						"name": "description",
						"jsonPath": "PipeSize.description",
						"label": "wc.create.description",
						"pattern": "",
						"type": "text",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					},
					{
						"name": "Active",
						"jsonPath": "PipeSize.active",
						"label": "wc.create.active",
						"pattern": "",
						"type": "checkbox",
						"isRequired": false,
						"isDisabled": false,
						"requiredErrMsg": "",
						"patternErrMsg": ""
					}
				]
			}
		]
	}
}

export default dat;
