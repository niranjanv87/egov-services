var events = [
  {
    jsonPath:"materialReceipt[0].receiptDetails[*].receiptDetailsAddnInfo[*].lotNo",
    onChange:function({jsonPath, value, setVal, getVal}){
      //setVal('materialReceipt[0].paymentTerms', 'Test Dummy Data Description');
    }
  },
  {
    jsonPath:"materialReceipt[0].receivingStore.code",
    onChange:function({jsonPath, value, setVal}){
      //console.log('changed', jsonPath, value);
      setVal('materialReceipt[0].paymentTerms', 'Test Dummy Data Description');
    }
  }

  
]

var dat = {
  "inventory.search": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "",
    "url": "/inventory-services/receiptnotes/_search",
    "groups": [{
      "name": "search",
      "label": "inventory.search.title",
      "fields": [{
        "name": "mrnNumber",
        "jsonPath": "mrnNumber",
        "label": "inventory.create.mrnNumber",
        "type": "",
        "isRequired": false,
        "isDisabled": false,
        "patternErrorMsg": "inventory.create.field.message.mrnNumber"
      }, {
        "name": "receiptType",
        "jsonPath": "receiptType",
        "label": "inventory.create.receiptType",
        "type": "",
        "isRequired": false,
        "isDisabled": false,
        "patternErrorMsg": "inventory.create.field.message.receiptType"
      }, {
        "name": "mrnStatus",
        "jsonPath": "mrnStatus",
        "label": "inventory.create.mrnStatus",
        "type": "text",
        "isRequired": false,
        "isDisabled": false,
        "patternErrorMsg": "inventory.create.field.message.mrnStatus"
      }, {
        "name": "receivingStore",
        "jsonPath": "receivingStore",
        "label": "inventory.create.receivingStore",
        "type": "text",
        "isRequired": false,
        "isDisabled": false,
        "patternErrorMsg": "inventory.create.field.message.receivingStore"
      }, {
        "name": "supplierCode",
        "jsonPath": "supplierCode",
        "label": "inventory.create.supplierCode",
        "type": "text",
        "isRequired": false,
        "isDisabled": false,
        "patternErrorMsg": "inventory.create.field.message.supplierCode"
      }, {
        "name": "receiptDateFrom",
        "jsonPath": "receiptDateFrom",
        "label": "inventory.create.receiptDateFrom",
        "type": "number",
        "isRequired": false,
        "isDisabled": false,
        "patternErrorMsg": "inventory.create.field.message.receiptDateFrom"
      }, {
        "name": "receiptDateT0",
        "jsonPath": "receiptDateT0",
        "label": "inventory.create.receiptDateT0",
        "type": "number",
        "isRequired": false,
        "isDisabled": false,
        "patternErrorMsg": "inventory.create.field.message.receiptDateT0"
      }, {
        "name": "sortBy",
        "jsonPath": "sortBy",
        "label": "inventory.create.sortBy",
        "type": "text",
        "isDisabled": false,
        "defaultValue": "id",
        "patternErrorMsg": "inventory.create.field.message.sortBy"
      }]
    }],
    "result": {
      "header": [{
        "label": "inventory.search.result.mrnNumber"
      }, {
        "label": "inventory.search.result.supplier"
      }, {
        "label": "inventory.search.result.challanNo"
      }, {
        "label": "inventory.search.result.challanDate"
      }, {
        "label": "inventory.search.result.mrnStatus"
      }],
      "values": ["mrnNumber", "supplier", "challanNo", "challanDate", "mrnStatus"],
      "resultPath": "materialReceipt",
      "rowClickUrlUpdate": "/update/materialReceipt/{mrnNumber}",
      "rowClickUrlView": "/view/materialReceipt/{mrnNumber}"
    }
  },
  "inventory.create": {
    "numCols": 4,
    "useTimestamp": true,
    "title":"Material Receipt Note",
    "objectName": "materialReceipt",
    "events":events,
    "groups": [{
      "name": "Material Receipt Note",
      "label": "inventory.create.group.title.Material Receipt Note",
      "fields": [{
        "name": "code",
        "jsonPath": "materialReceipt[0].receivingStore.code",
        "label": "inventory.create.receivingStore.code",
        "type": "singleValueList",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 50,
        "minLength": 5,
        "url": "inventory-services/stores/_search?|$.stores[*].code|$.stores[*].name|$..name|$..code"
      }, {
        "name": "receiptDate",
        "jsonPath": "materialReceipt[0].receiptDate",
        "label": "inventory.create.receiptDate",
        "pattern": "",
        "type": "datePicker",
        "isRequired": true,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "receiptType",
        "jsonPath": "materialReceipt[0].receiptType",
        "label": "inventory.create.receiptType",
        "type": "singleValueList",
        "isRequired": true,
        "isDisabled": false,
        "defaultValue": [
          {key: null, value: "-- Please Select --"},
          {
             "key":"PURCHASE RECEIPT",
             "value":"Purchase Receipt"
          },
          {
             "key":"MISCELLANEOUS RECEIPT",
             "value":"Miscellaneous Receipt"
          },
          {
             "key":"INWARD RECEIPT",
             "value":"Inward Receipt"
          },
          {
             "key":"OPENING BALANCE",
             "value":"Opening Balance"
          }
        ]
      },{
        "name": "code",
        "jsonPath": "materialReceipt[0].supplier.code",
        "label": "inventory.create.supplier.code",
        "type": "singleValueList",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 50,
        "minLength": 5,
        "patternErrorMsg": "inventory.create.field.message.code",
        "url": "inventory-services/suppliers/_search?|$.suppliers[*].code|$.suppliers[*].name|$..name|$..code"
      }, {
        "name": "supplierBillNo",
        "jsonPath": "materialReceipt[0].supplierBillNo",
        "label": "inventory.create.supplierBillNo",
        "pattern": "",
        "type": "text",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "supplierBillDate",
        "jsonPath": "materialReceipt[0].supplierBillDate",
        "label": "inventory.create.supplierBillDate",
        "pattern": "",
        "type": "datePicker",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "challanNo",
        "jsonPath": "materialReceipt[0].challanNo",
        "label": "inventory.create.challanNo",
        "pattern": "",
        "type": "text",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 52,
        "patternErrorMsg": ""
      }, {
        "name": "challanDate",
        "jsonPath": "materialReceipt[0].challanDate",
        "label": "inventory.create.challanDate",
        "pattern": "",
        "type": "datePicker",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "description",
        "jsonPath": "materialReceipt[0].description",
        "label": "inventory.create.remarks",
        "pattern": "",
        "type": "textarea",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 512,
        "patternErrorMsg": ""
      }, {
        "name": "paymentTerms",
        "jsonPath": "materialReceipt[0].paymentTerms",
        "label": "inventory.create.paymentTerms",
        "pattern": "",
        "type": "textarea",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 1000,
        "patternErrorMsg": ""
      }, {
        "name": "receivedBy",
        "jsonPath": "materialReceipt[0].receivedBy",
        "label": "inventory.create.receivedBy",
        "pattern": "",
        "type": "text",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "designation",
        "jsonPath": "materialReceipt[0].designation",
        "label": "inventory.create.designation",
        "pattern": "",
        "type": "text",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "mrnStatus",
        "jsonPath": "materialReceipt[0].mrnStatus",
        "label": "inventory.create.mrnStatus",
        "type": "singleValueList",
        "isRequired": true,
        "isDisabled": false,
        "defaultValue": [
          {key:null, value:"---Please Select---"},
          {key:"CREATED", value:"Created"},
          {key:"APPROVED", value:"Approved"},
          {key:"CANCELED", value:"Canceled"}
        ]
      },{}, {}, {
        "name": "inspectedBy",
        "jsonPath": "materialReceipt[0].inspectedBy",
        "label": "inventory.create.inspectedBy",
        "pattern": "",
        "type": "text",
        "url":"inventory-services/stores/_search?|$.stores[0].code",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "inspectionDate",
        "jsonPath": "materialReceipt[0].inspectionDate",
        "label": "inventory.create.inspectionDate",
        "pattern": "",
        "type": "datePicker",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "inspectionRemarks",
        "jsonPath": "materialReceipt[0].inspectionRemarks",
        "label": "inventory.create.inspectionRemarks",
        "pattern": "",
        "type": "textarea",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }]
    },

    {
      "name": "Material Receipt Details",
      "label": "inventory.materialreceipt.details",
      "isFullWidth":true,
      "fields": [
        {
          "name": "receiptDetaills",
          "jsonPath": "materialReceipt[0].receiptDetails",
          "type":"nestedTableList",
          "tableList":{
             "colsWeight":{0:0.3, 2:2 , 11:0.3}, // columnIndex : weightValue (Integer)
             "mandatoryCols":[0, 2, 4],
             "isEditMode":true,
             "tables":[
               {
                  "name": "receiptDetaillsAddnInfo",
                  "jsonPath": "materialReceipt[0].receiptDetails[0].receiptDetailsAddnInfo",
                  "type": "nestedTableList",
                  "tableList": {
                    "colsWeight": {
                      0: 0.3,
                      11: 0.3
                    },
                    "isEditMode": true,
                    "header": [
                      {
                        "label": "S.No"
                      },
                      {
                        "label": "LOT No"
                      },
                      {
                        "label": "Serial Number"
                      },
                      {
                        "label": "Batch No"
                      },
                      {
                        "label": "Manufacture Date"
                      },
                      {
                        "label": "Expiry Date"
                      }
                    ],
                    "values": [
                      {
                        name: 'sno',
                        isSerialNo: true
                      },
                      {
                        "name": "lotNo",
                        "pattern": "",
                        "type": "text",
                        "isHideLabel": true,
                        "jsonPath": "materialReceipt[0].receiptDetails[0].receiptDetailsAddnInfo[0].lotNo",
                        "isRequired": false,
                        "isDisabled": false
                      },
                      {
                        "name": "serialNo",
                        "pattern": "",
                        "type": "text",
                        "isHideLabel": true,
                        "jsonPath": "materialReceipt[0].receiptDetails[0].receiptDetailsAddnInfo[0].serialNo",
                        "isRequired": false,
                        "isDisabled": false
                      },
                      {
                        "name": "batchNo",
                        "pattern": "",
                        "type": "text",
                        "isHideLabel": true,
                        "jsonPath": "materialReceipt[0].receiptDetails[0].receiptDetailsAddnInfo[0].batchNo",
                        "isRequired": false,
                        "isDisabled": false
                      },
                      {
                        "name": "manufactureDate",
                        "pattern": "",
                        "type": "datePicker",
                        "isHideLabel": true,
                        "jsonPath": "materialReceipt[0].receiptDetails[0].receiptDetailsAddnInfo[0].manufactureDate",
                        "isRequired": false,
                        "isDisabled": false
                      },
                      {
                        "name": "expiryDate",
                        "pattern": "",
                        "type": "datePicker",
                        "isHideLabel": true,
                        "jsonPath": "materialReceipt[0].receiptDetails[0].receiptDetailsAddnInfo[0].expiryDate",
                        "isRequired": false,
                        "isDisabled": false
                      }
                    ]
                  }
                }
             ],
             "header":[
                {
                    "label":"S.No"
                },
                {
                   "label":"PO.No"
                },
                {
                   "label":"MATERIAL Name"
                },
                {
                   "label":"UOM"
                },
                {
                   "label":"ORDER QTY."
                },
                {
                   "label":"RECEIVED QTY."
                },
                {
                   "label":"ACCEPTED QTY."
                },
                {
                   "label":"UNIT RATE"
                },
                {
                   "label":"TOTAL VALUE ACCEPTED"
                },
                {
                   "label":"QTY REJECTED"
                },
                {
                   "label":"REJECT REMARKS"
                }
             ],
             "values":[
               {
                 name:'sno',
                 isSerialNo:true
               },
               {
                  "name":"poNumber",
                  "pattern":"",
                  "type":"singleValueList",
                  "isHideLabel":true,
                  "jsonPath":"materialReceipt[0].receiptDetails[0].purchaseOrderDetail.id",
                  "isRequired":true,
                  "isDisabled":false,
                  "url":"inventory-services/purchaseorders/_search?|$.purchaseOrders[*].id|$.purchaseOrders[*].purchaseOrderNumber|$.purchaseOrders[*].purchaseOrderDetails[*].material.code|$.purchaseOrders[*].purchaseOrderDetails[*].id",
                  "depedants":[
                     {
                       "jsonPath":"materialReceipt[0].receiptDetails[0].material.code",
                       "type":"textField",
                       "valExp":"getValFromDropdownData('materialReceipt[0].receiptDetails[0].material.code', getVal('materialReceipt[0].receiptDetails[0].material.code'), 'others[0].code')"
                     }
                  ]
               },
               {
                  "name":"materialName",
                  "pattern":"",
                  "type":"singleValueList",
                  "isHideLabel":true,
                  "jsonPath":"materialReceipt[0].receiptDetails[0].material.code",
                  "url":"/egov-mdms-service/v1/_get?&moduleName=inventory&masterName=Material|$..code|$..name",
                  "isRequired":false,
                  "isDisabled":false
               },
               {
                  "name":"uom",
                  "pattern":"",
                  "type":"text",
                  "isHideLabel":true,
                  "jsonPath":"materialReceipt[0].receiptDetails[0].uom.code",
                  "isRequired":true,
                  "isDisabled":false
               },
               {
                  "name":"orderedQty",
                  "pattern":"",
                  "type":"number",
                  "isHideLabel":true,
                  "jsonPath":"materialReceipt[0].receiptDetails[0].orderedQty",
                  "isRequired":true,
                  "isDisabled":false
               },
               {
                  "name":"receivedQty",
                  "pattern":"",
                  "type":"number",
                  "isHideLabel":true,
                  "jsonPath":"materialReceipt[0].receiptDetails[0].receivedQty",
                  "isRequired":true,
                  "isDisabled":false
               },
               {
                  "name":"acceptedQty",
                  "pattern":"",
                  "type":"number",
                  "isHideLabel":true,
                  "jsonPath":"materialReceipt[0].receiptDetails[0].acceptedQty",
                  "isRequired":true,
                  "isDisabled":false
               },
               {
                  "name":"unitRate",
                  "pattern":"",
                  "type":"number",
                  "isHideLabel":true,
                  "jsonPath":"materialReceipt[0].receiptDetails[0].unitRate",
                  "isRequired":true,
                  "isDisabled":false
               },
               {
                  "name":"totalValueAccepted",
                  "pattern":"",
                  "type":"number",
                  "isHideLabel":true,
                  "jsonPath":"materialReceipt[0].receiptDetails[0].totalValueAccepted",
                  "isRequired":true,
                  "isDisabled":false
               },
               {
                  "name":"qtyRejected",
                  "pattern":"",
                  "type":"number",
                  "isHideLabel":true,
                  "jsonPath":"materialReceipt[0].receiptDetails[0].qtyRejected",
                  "isRequired":true,
                  "isDisabled":false
               },
               {
                  "name":"rejectedRemarks",
                  "pattern":"",
                  "type":"textarea",
                  "isHideLabel":true,
                  "jsonPath":"materialReceipt[0].receiptDetails[0].rejectedRemark",
                  "isRequired":true,
                  "isDisabled":false
               }
             ]
          }

        }
      ]
    }


   ],
    "url": "/inventory-services/receiptnotes/_create",
    "tenantIdRequired": true
  },
  "inventory.view": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "materialReceipt",
    "groups": [{
      "name": "Material Receipt Note",
      "label": "inventory.create.group.title.Material Receipt Note",
      "fields": [{
        "name": "code",
        "jsonPath": "materialReceipt[0].receivingStore.code",
        "label": "inventory.create.receivingStore.code",
        "pattern": "^[a-zA-Z0-9]+$",
        "type": "singleValueList",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 50,
        "minLength": 5,
        "patternErrorMsg": "inventory.create.field.message.code",
        "url": "inventory-services/stores/_search?|$.stores[*].code|$.stores[*].name|$..name|$..code"
      }, {
        "name": "receiptDate",
        "jsonPath": "materialReceipt[0].receiptDate",
        "label": "inventory.create.receiptDate",
        "pattern": "",
        "type": "number",
        "isRequired": true,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "receiptType",
        "jsonPath": "materialReceipt[0].receiptType",
        "label": "inventory.create.receiptType",
        "pattern": "",
        "type": "singleValueList",
        "isRequired": true,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "code",
        "jsonPath": "materialReceipt[0].supplier.code",
        "label": "inventory.create.supplier.code",
        "pattern": "^[a-zA-Z0-9]+$",
        "type": "text",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 50,
        "minLength": 5,
        "patternErrorMsg": "inventory.create.field.message.code",
        "url": "inventory-services/suppliers/_search?|$.suppliers[*].code|$.suppliers[*].name|$..name|$..code"
      }, {
        "name": "supplierBillNo",
        "jsonPath": "materialReceipt[0].supplierBillNo",
        "label": "inventory.create.supplierBillNo",
        "pattern": "",
        "type": "",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "supplierBillDate",
        "jsonPath": "materialReceipt[0].supplierBillDate",
        "label": "inventory.create.supplierBillDate",
        "pattern": "",
        "type": "number",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "challanNo",
        "jsonPath": "materialReceipt[0].challanNo",
        "label": "inventory.create.challanNo",
        "pattern": "",
        "type": "",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 52,
        "patternErrorMsg": ""
      }, {
        "name": "challanDate",
        "jsonPath": "materialReceipt[0].challanDate",
        "label": "inventory.create.challanDate",
        "pattern": "",
        "type": "number",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "description",
        "jsonPath": "materialReceipt[0].description",
        "label": "inventory.create.description",
        "pattern": "",
        "type": "",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 512,
        "patternErrorMsg": ""
      }, {
        "name": "paymentTerms",
        "jsonPath": "materialReceipt[0].paymentTerms",
        "label": "inventory.create.paymentTerms",
        "pattern": "",
        "type": "textarea",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 1000,
        "patternErrorMsg": ""
      }, {
        "name": "receivedBy",
        "jsonPath": "materialReceipt[0].receivedBy",
        "label": "inventory.create.receivedBy",
        "pattern": "",
        "type": "",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "designation",
        "jsonPath": "materialReceipt[0].designation",
        "label": "inventory.create.designation",
        "pattern": "",
        "type": "",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "mrnStatus",
        "jsonPath": "materialReceipt[0].mrnStatus",
        "label": "inventory.create.mrnStatus",
        "pattern": "",
        "type": "singleValueList",
        "isRequired": true,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "inspectedBy",
        "jsonPath": "materialReceipt[0].inspectedBy",
        "label": "inventory.create.inspectedBy",
        "pattern": "",
        "type": "",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "inspectionDate",
        "jsonPath": "materialReceipt[0].inspectionDate",
        "label": "inventory.create.inspectionDate",
        "pattern": "",
        "type": "number",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "inspectionRemarks",
        "jsonPath": "materialReceipt[0].inspectionRemarks",
        "label": "inventory.create.inspectionRemarks",
        "pattern": "",
        "type": "",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }]
    }],
    "tenantIdRequired": true,
    "url": "/inventory-services/receiptnotes/_search?mrnNumber={mrnNumber}"
  },
  "inventory.update": {
    "numCols": 4,
    "useTimestamp": true,
    "objectName": "materialReceipt",
    "groups": [{
      "name": "Material Receipt Note",
      "label": "inventory.create.group.title.Material Receipt Note",
      "fields": [{
        "name": "code",
        "jsonPath": "materialReceipt[0].receivingStore.code",
        "label": "inventory.create.receivingStore.code",
        "pattern": "^[a-zA-Z0-9]+$",
        "type": "singleValueList",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 50,
        "minLength": 5,
        "patternErrorMsg": "inventory.create.field.message.code",
        "url": "inventory-services/stores/_search?|$.stores[*].code|$.stores[*].name|$..name|$..code"
      }, {
        "name": "receiptDate",
        "jsonPath": "materialReceipt[0].receiptDate",
        "label": "inventory.create.receiptDate",
        "pattern": "",
        "type": "number",
        "isRequired": true,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "receiptType",
        "jsonPath": "materialReceipt[0].receiptType",
        "label": "inventory.create.receiptType",
        "pattern": "",
        "type": "singleValueList",
        "isRequired": true,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "code",
        "jsonPath": "materialReceipt[0].supplier.code",
        "label": "inventory.create.supplier.code",
        "pattern": "^[a-zA-Z0-9]+$",
        "type": "text",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 50,
        "minLength": 5,
        "patternErrorMsg": "inventory.create.field.message.code",
        "url": "inventory-services/suppliers/_search?|$.suppliers[*].code|$.suppliers[*].name|$..name|$..code"
      }, {
        "name": "supplierBillNo",
        "jsonPath": "materialReceipt[0].supplierBillNo",
        "label": "inventory.create.supplierBillNo",
        "pattern": "",
        "type": "",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "supplierBillDate",
        "jsonPath": "materialReceipt[0].supplierBillDate",
        "label": "inventory.create.supplierBillDate",
        "pattern": "",
        "type": "number",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "challanNo",
        "jsonPath": "materialReceipt[0].challanNo",
        "label": "inventory.create.challanNo",
        "pattern": "",
        "type": "",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 52,
        "patternErrorMsg": ""
      }, {
        "name": "challanDate",
        "jsonPath": "materialReceipt[0].challanDate",
        "label": "inventory.create.challanDate",
        "pattern": "",
        "type": "number",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "description",
        "jsonPath": "materialReceipt[0].description",
        "label": "inventory.create.description",
        "pattern": "",
        "type": "",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 512,
        "patternErrorMsg": ""
      }, {
        "name": "paymentTerms",
        "jsonPath": "materialReceipt[0].paymentTerms",
        "label": "inventory.create.paymentTerms",
        "pattern": "",
        "type": "textarea",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "maxLength": 1000,
        "patternErrorMsg": ""
      }, {
        "name": "receivedBy",
        "jsonPath": "materialReceipt[0].receivedBy",
        "label": "inventory.create.receivedBy",
        "pattern": "",
        "type": "",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "designation",
        "jsonPath": "materialReceipt[0].designation",
        "label": "inventory.create.designation",
        "pattern": "",
        "type": "",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "mrnStatus",
        "jsonPath": "materialReceipt[0].mrnStatus",
        "label": "inventory.create.mrnStatus",
        "pattern": "",
        "type": "singleValueList",
        "isRequired": true,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "inspectedBy",
        "jsonPath": "materialReceipt[0].inspectedBy",
        "label": "inventory.create.inspectedBy",
        "pattern": "",
        "type": "",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "inspectionDate",
        "jsonPath": "materialReceipt[0].inspectionDate",
        "label": "inventory.create.inspectionDate",
        "pattern": "",
        "type": "number",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }, {
        "name": "inspectionRemarks",
        "jsonPath": "materialReceipt[0].inspectionRemarks",
        "label": "inventory.create.inspectionRemarks",
        "pattern": "",
        "type": "",
        "isRequired": false,
        "isDisabled": false,
        "defaultValue": "",
        "patternErrorMsg": ""
      }]
    }],
    "url": "/inventory-services/receiptnotes/_update",
    "tenantIdRequired": true,
    "searchUrl": "/inventory-services/receiptnotes/_search?mrnNumber={mrnNumber}"
  }
}
export default dat;
