import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataSqlavailabilitygroupsProps extends IAzAPIBaseProps {

}

/**
 * AzurearcdataSqlavailabilitygroups resource
 */
export class AzurearcdataSqlavailabilitygroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataSqlavailabilitygroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/sqlAvailabilityGroups@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataSqlavailabilitygroupsProps): string {
    return JSON.stringify(
        {properties: {availabilityGroupId: "string", availabilityGroupName: "string", basicFeatures: "${bool}", clusterTypeDesc: "string", collectionTimestamp: "string", dbFailover: "${bool}", dtcSupport: "${bool}", instanceName: "string", isContained: "${bool}", isDistributed: "${bool}", requiredSynchronizedSecondariesCommit: "${int}", version: "${int}"}}
    );
  }
}
