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
   * Gets or sets the expiry time.
   */
readonly expiryTime?: string;

/**
   * Gets or sets the value of the enabled flag of webhook.
   */
readonly isEnabled?: bool;

/**
   * Gets or sets the parameters of the job.
   */
readonly parameters?: WebhookCreateOrUpdatePropertiesParameters;

/**
   * Gets or sets the runbook.
   */
readonly runbook?: RunbookAssociationProperty;

/**
   * Gets or sets the name of the hybrid worker group the webhook job will run on.
   */
readonly runOn?: string;

/**
   * Gets or sets the uri.
   */
readonly uri?: string;

/**
   * 
   */
readonly {customized property}?: string;
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
