import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicebusNamespacesDisasterrecoveryconfigsProps extends IAzAPIBaseProps {

}

/**
 * ServicebusNamespacesDisasterrecoveryconfigs resource
 */
export class ServicebusNamespacesDisasterrecoveryconfigs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicebusNamespacesDisasterrecoveryconfigsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs@2022-10-01-preview";
  }

  protected getResourceBody(props: ServicebusNamespacesDisasterrecoveryconfigsProps): string {
    return JSON.stringify(
        {properties: {alternateName: "string", partnerNamespace: "string"}}
    );
  }
}
