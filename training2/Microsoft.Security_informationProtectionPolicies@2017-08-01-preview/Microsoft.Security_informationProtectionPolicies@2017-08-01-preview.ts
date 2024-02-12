import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The sensitivity information types.
   */
readonly informationTypes?: InformationProtectionPolicyPropertiesInformationType...;

/**
   * Dictionary of sensitivity labels.
   */
readonly labels?: InformationProtectionPolicyPropertiesLabels;

/**
   * 
   */
readonly {customized property}?: InformationType;

/**
   * Indicates whether the information type is custom or not.
   */
readonly custom?: bool;

/**
   * The description of the information type.
   */
readonly description?: string;

/**
   * The name of the information type.
   */
readonly displayName?: string;

/**
   * Indicates whether the information type is enabled or not.
   */
readonly enabled?: bool;

/**
   * The information type keywords.
   */
readonly keywords?: InformationProtectionKeyword[];

/**
   * The order of the information type.
   */
readonly order?: number;

/**
   * The recommended label id to be associated with this information type.
   */
readonly recommendedLabelId?: stringConstranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;

/**
   * Indicates whether the keyword can be applied on numeric types or not.
   */
readonly canBeNumeric?: bool;

/**
   * Indicates whether the keyword is custom or not.
   */
readonly custom?: bool;

/**
   * Indicates whether the keyword is excluded or not.
   */
readonly excluded?: bool;

/**
   * The keyword pattern.
   */
readonly pattern?: string;

/**
   * 
   */
readonly {customized property}?: SensitivityLabel;

/**
   * The description of the sensitivity label.
   */
readonly description?: string;

/**
   * The name of the sensitivity label.
   */
readonly displayName?: string;

/**
   * Indicates whether the label is enabled or not.
   */
readonly enabled?: bool;

/**
   * The order of the sensitivity label.
   */
readonly order?: number;

/**
   * The rank of the sensitivity label.
   */
readonly rank?: 'Critical''High''Low''Medium''None';
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
