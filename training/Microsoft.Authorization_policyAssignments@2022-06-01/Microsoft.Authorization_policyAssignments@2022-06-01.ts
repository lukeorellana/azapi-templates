import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface Props extends IAzAPIBaseProps {

}

export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
      
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 1-128 display name1-64 resource name1-24 resource name at management group scopeValid characters:Display name can contain any characters.Resource name can't use:<>*%&:\?.+/or control characters.Can't end with period or space. |
// | location | The location of the policy assignment. Only required when utilizing managed identity. | string |
// | scope | Use when creating an extension resource at a scope that is different than the deployment scope. | Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource. |
// | identity | The managed identity associated with the policy assignment. | Identity |
// | properties | Properties for the policy assignment. | PolicyAssignmentProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | The identity type. This is the only required field when adding a system or user assigned identity to a resource. | 'None''SystemAssigned''UserAssigned' |
// | userAssignedIdentities | The user identity associated with the policy. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. | object |

// | Name | Description | Value |
// |-|-|-|
// | description | This message will be part of response in case of policy violation. | string |
// | displayName | The display name of the policy assignment. | string |
// | enforcementMode | The policy assignment enforcement mode. Possible values are Default and DoNotEnforce. | 'Default''DoNotEnforce' |
// | metadata | The policy assignment metadata. Metadata is an open ended object and is typically a collection of key value pairs. | For Bicep, you can use theany()function. |
// | nonComplianceMessages | The messages that describe why a resource is non-compliant with the policy. | NonComplianceMessage[] |
// | notScopes | The policy's excluded scopes. | string[] |
// | overrides | The policy property value override. | Override[] |
// | parameters | The parameter values for the assigned policy rule. The keys are the parameter names. | object |
// | policyDefinitionId | The ID of the policy definition or policy set definition being assigned. | string |
// | resourceSelectors | The resource selector list to filter policies by resource properties. | ResourceSelector[] |

// | Name | Description | Value |
// |-|-|-|
// | message | A message that describes why a resource is non-compliant with the policy. This is shown in 'deny' error messages and on resource's non-compliant compliance results. | string (required) |
// | policyDefinitionReferenceId | The policy definition reference ID within a policy set definition the message is intended for. This is only applicable if the policy assignment assigns a policy set definition. If this is not provided the message applies to all policies assigned by this policy assignment. | string |

// | Name | Description | Value |
// |-|-|-|
// | kind | The override kind. | 'policyEffect' |
// | selectors | The list of the selector expressions. | Selector[] |
// | value | The value to override the policy property. | string |

// | Name | Description | Value |
// |-|-|-|
// | in | The list of values to filter in. | string[] |
// | kind | The selector kind. | 'policyDefinitionReferenceId''resourceLocation''resourceType''resourceWithoutLocation' |
// | notIn | The list of values to filter out. | string[] |

// | Name | Description | Value |
// |-|-|-|
// | name | The name of the resource selector. | string |
// | selectors | The list of the selector expressions. | Selector[] |
