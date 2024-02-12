import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesConnectedregistriesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:registries;

/**
   * The list of the ACR token resource IDs used to authenticate clients to the connected registry.
   */
readonly clientTokenIds?: string[];

/**
   * The logging properties of the connected registry.
   */
readonly logging?: LoggingProperties;

/**
   * The login server properties of the connected registry.
   */
readonly loginServer?: LoginServerProperties;

/**
   * The mode of the connected registry resource that indicates the permissions of the registry.
   */
readonly mode: 'Mirror''ReadOnly''ReadWrite''Registry';

/**
   * The list of notifications subscription information for the connected registry.
   */
readonly notificationsList?: string[];

/**
   * The parent of the connected registry.
   */
readonly parent: ParentProperties;

/**
   * Indicates whether audit logs are enabled on the connected registry.
   */
readonly auditLogStatus?: 'Disabled''Enabled';

/**
   * The verbosity of logs persisted on the connected registry.
   */
readonly logLevel?: 'Debug''Error''Information''None''Warning';

/**
   * The resource ID of the parent to which the connected registry will be associated.
   */
readonly id?: string;

/**
   * The sync properties of the connected registry with its parent.
   */
readonly syncProperties: SyncProperties;

/**
   * The period of time for which a message is available to sync before it is expired. Specify the duration using the format P[n]Y[n]M[n]DT[n]H[n]M[n]S as per ISO8601.
   */
readonly messageTtl: string;

/**
   * The cron expression indicating the schedule that the connected registry will sync with its parent.
   */
readonly schedule?: string;

/**
   * The time window during which sync is enabled for each schedule occurrence. Specify the duration using the format P[n]Y[n]M[n]DT[n]H[n]M[n]S as per ISO8601.
   */
readonly syncWindow?: string;

/**
   * The resource ID of the ACR token used to authenticate the connected registry to its parent during sync.
   */
readonly tokenId: string;
}

/**
 * ContainerregistryRegistriesConnectedregistries resource
 */
export class ContainerregistryRegistriesConnectedregistries extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesConnectedregistriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/connectedRegistries@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesConnectedregistriesProps): string {
    return JSON.stringify(
        {properties: {clientTokenIds: ["string"], logging: {auditLogStatus: "string", logLevel: "string"}, loginServer: {}, mode: "string", notificationsList: ["string"], parent: {id: "string", syncProperties: {messageTtl: "string", schedule: "string", syncWindow: "string", tokenId: "string"}}}}
    );
  }
}
