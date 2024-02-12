import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterProjectsPoolsProps extends IAzAPIBaseProps {

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
