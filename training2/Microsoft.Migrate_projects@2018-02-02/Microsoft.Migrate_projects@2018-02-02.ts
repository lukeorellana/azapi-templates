import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * For optimistic concurrency control.
   */
readonly eTag?: string;

/**
   * ARM ID of the Service Map workspace created by user.
   */
readonly customerWorkspaceId?: string;

/**
   * Location of the Service Map workspace created by user.
   */
readonly customerWorkspaceLocation?: string;

/**
   * Provisioning state of the project.
   */
readonly provisioningState?: 'Accepted''Creating''Deleting''Failed''Moving''Succeeded';
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
