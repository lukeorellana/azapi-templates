import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface AvsPrivatecloudsAuthorizationsProps extends IAzAPIBaseProps {

}

export class AvsPrivatecloudsAuthorizations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AvsPrivatecloudsAuthorizationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AVS/privateClouds/authorizations@2022-05-01";
  }

  protected getResourceBody(props: AvsPrivatecloudsAuthorizationsProps): string {
    return JSON.stringify(
      
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:privateClouds |
