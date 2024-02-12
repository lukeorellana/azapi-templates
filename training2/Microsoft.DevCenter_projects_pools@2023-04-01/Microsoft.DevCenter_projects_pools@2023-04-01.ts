import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterProjectsPoolsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:projects;

/**
   * Name of a Dev Box definition in parent Project of this Pool
   */
readonly devBoxDefinitionName?: string;

/**
   * Specifies the license type indicating the caller has already acquired licenses for the Dev Boxes that will be created.
   */
readonly licenseType?: 'Windows_Client';

/**
   * Indicates whether owners of Dev Boxes in this pool are added as local administrators on the Dev Box.
   */
readonly localAdministrator?: 'Disabled''Enabled';

/**
   * Name of a Network Connection in parent Project of this Pool
   */
readonly networkConnectionName?: string;

/**
   * Stop on disconnect configuration settings for Dev Boxes created in this pool.
   */
readonly stopOnDisconnect?: StopOnDisconnectConfiguration;

/**
   * The specified time in minutes to wait before stopping a Dev Box once disconnect is detected.
   */
readonly gracePeriodMinutes?: number;

/**
   * Whether the feature to stop the Dev Box on disconnect once the grace period has lapsed is enabled.
   */
readonly status?: 'Disabled''Enabled';
}

/**
 * DevcenterProjectsPools resource
 */
export class DevcenterProjectsPools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevcenterProjectsPoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevCenter/projects/pools@2023-04-01";
  }

  protected getResourceBody(props: DevcenterProjectsPoolsProps): string {
    return JSON.stringify(
        {properties: {devBoxDefinitionName: "string", licenseType: "Windows_Client", localAdministrator: "string", networkConnectionName: "string", stopOnDisconnect: {gracePeriodMinutes: "${int}", status: "string"}}}
    );
  }
}
