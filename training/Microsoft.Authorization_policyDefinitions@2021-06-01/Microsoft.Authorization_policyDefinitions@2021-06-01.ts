import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface AuthorizationPolicydefinitionsProps extends IAzAPIBaseProps {

}

export class AuthorizationPolicydefinitions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AuthorizationPolicydefinitionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Authorization/policyDefinitions@2021-06-01";
  }

  protected getResourceBody(props: AuthorizationPolicydefinitionsProps): string {
    return JSON.stringify(
      {properties: {description: "string", displayName: "string", mode: "string", parameters: {}, policyType: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 1-128 display name1-64 resource nameValid characters:Display name can contain any characters.Resource name can't use:<>*%&:\?.+/or control characters.Can't end with period or space. |
// | scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
// | properties | The policy definition properties. | PolicyDefinitionProperties |

// | Name | Description | Value |
// |-|-|-|
// | description | The policy definition description. | string |
// | displayName | The display name of the policy definition. | string |
// | metadata | The policy definition metadata.  Metadata is an open ended object and is typically a collection of key value pairs. | For Bicep, you can use theany()function. |
// | mode | The policy definition mode. Some examples are All, Indexed, Microsoft.KeyVault.Data. | string |
// | parameters | The parameter definitions for parameters used in the policy rule. The keys are the parameter names. | object |
// | policyRule | The policy rule. | For Bicep, you can use theany()function. |
// | policyType | The type of policy definition. Possible values are NotSpecified, BuiltIn, Custom, and Static. | 'BuiltIn''Custom''NotSpecified''Static' |
