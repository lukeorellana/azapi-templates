import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DbformariadbServersConfigurationsProps extends IAzAPIBaseProps {

}

export class DbformariadbServersConfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformariadbServersConfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMariaDB/servers/configurations@2018-06-01";
  }

  protected getResourceBody(props: DbformariadbServersConfigurationsProps): string {
    return JSON.stringify(
      {properties: {source: "string", value: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
// | properties | The properties of a configuration. | ConfigurationProperties |

// | Name | Description | Value |
// |-|-|-|
// | source | Source of the configuration. | string |
// | value | Value of the configuration. | string |
