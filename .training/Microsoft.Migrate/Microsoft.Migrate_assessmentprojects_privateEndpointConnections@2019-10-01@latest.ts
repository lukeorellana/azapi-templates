import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateAssessmentprojectsPrivateendpointconnectionsProps extends IAzAPIBaseProps {

}

/**
 * MigrateAssessmentprojectsPrivateendpointconnections resource
 */
export class MigrateAssessmentprojectsPrivateendpointconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MigrateAssessmentprojectsPrivateendpointconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Migrate/assessmentprojects/privateEndpointConnections@2019-10-01";
  }

  protected getResourceBody(props: MigrateAssessmentprojectsPrivateendpointconnectionsProps): string {
    return JSON.stringify(
        {properties: {privateLinkServiceConnectionState: {actionsRequired: "string", description: "string", status: "string"}}, eTag: "string"}
    );
  }
}
