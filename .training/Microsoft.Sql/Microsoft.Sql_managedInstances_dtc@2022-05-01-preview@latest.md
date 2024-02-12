```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.Sql/managedInstances/dtc@2022-05-01-preview"
  name = "current"
  parent_id = "string"
  body = jsonencode({
    properties = {
      dtcEnabled = bool
      externalDnsSuffixSearchList = [
        "string"
      ]
      securitySettings = {
        snaLu6point2TransactionsEnabled = bool
        transactionManagerCommunicationSettings = {
          allowInboundEnabled = bool
          allowOutboundEnabled = bool
          authentication = "string"
        }
        xaTransactionsDefaultTimeout = int
        xaTransactionsEnabled = bool
        xaTransactionsMaximumTimeout = int
      }
    }
  })
}

```

### managedInstances/dtc

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | 'current' |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:managedInstances |
| properties | Resource properties. | ManagedInstanceDtcProperties |


### ManagedInstanceDtcProperties

| Name | Description | Value |
|-|-|-|
| dtcEnabled | Active status of managed instance DTC. | bool |
| externalDnsSuffixSearchList | External dns suffix search list of managed instance DTC. | string[] |
| securitySettings | Security settings of managed instance DTC. | ManagedInstanceDtcSecuritySettings |


### ManagedInstanceDtcSecuritySettings

| Name | Description | Value |
|-|-|-|
| snaLu6point2TransactionsEnabled | Allow SNA LU 6.2 Transactions to managed instance DTC. | bool |
| transactionManagerCommunicationSettings | Transaction Manager communication settings of managed instance DTC. | ManagedInstanceDtcTransactionManagerCommunicationSet... |
| xaTransactionsDefaultTimeout | Default timeout for XA Transactions (in seconds). | int |
| xaTransactionsEnabled | Allow XA Transactions to managed instance DTC. | bool |
| xaTransactionsMaximumTimeout | Maximum timeout for XA Transactions (in seconds). | int |


### ManagedInstanceDtcTransactionManagerCommunicationSet...

| Name | Description | Value |
|-|-|-|
| allowInboundEnabled | Allow Inbound traffic to managed instance DTC. | bool |
| allowOutboundEnabled | Allow Outbound traffic of managed instance DTC. | bool |
| authentication | Authentication type of managed instance DTC. | string |


