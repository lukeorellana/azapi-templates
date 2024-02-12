import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MigrateAssessmentprojectsServercollectorsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:assessmentProjects;

/**
   * 
   */
readonly eTag?: string;

/**
   * 
   */
readonly agentProperties?: CollectorAgentProperties;

/**
   * The ARM id of the discovery service site.
   */
readonly discoverySiteId?: string;

/**
   * 
   */
readonly spnDetails?: CollectorBodyAgentSpnProperties;

/**
   * Application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
   */
readonly applicationId?: string;

/**
   * Intended audience for the service principal.
   */
readonly audience?: string;

/**
   * AAD Authority URL which was used to request the token for the service principal.
   */
readonly authority?: string;

/**
   * Object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
   */
readonly objectId?: string;

/**
   * Tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
   */
readonly tenantId?: string;
}

/**
 * MigrateAssessmentprojectsServercollectors resource
 */
export class MigrateAssessmentprojectsServercollectors extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MigrateAssessmentprojectsServercollectorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Migrate/assessmentProjects/servercollectors@2019-10-01";
  }

  protected getResourceBody(props: MigrateAssessmentprojectsServercollectorsProps): string {
    return JSON.stringify(
        {properties: {agentProperties: {spnDetails: {applicationId: "string", audience: "string", authority: "string", objectId: "string", tenantId: "string"}}, discoverySiteId: "string"}, eTag: "string"}
    );
  }
}
