import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:automationAccounts;

/**
   * Gets or sets the field definitions of the connection type.
   */
readonly fieldDefinitions: ConnectionTypeCreateOrUpdatePropertiesFieldDefinitio...;

/**
   * Gets or sets a Boolean value to indicate if the connection type is global.
   */
readonly isGlobal?: bool;

/**
   * 
   */
readonly {customized property}?: FieldDefinition;

/**
   * Gets or sets the isEncrypted flag of the connection field definition.
   */
readonly isEncrypted?: bool;

/**
   * Gets or sets the isOptional flag of the connection field definition.
   */
readonly isOptional?: bool;

/**
   * Gets or sets the type of the connection field definition.
   */
readonly type: string;
}

/**
 *  resource
 */
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
