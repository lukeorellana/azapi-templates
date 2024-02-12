import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebContainerappsProps extends IAzAPIBaseProps {
/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * Non versioned Container App configuration properties.
   */
readonly configuration?: Configuration;

/**
   * Resource ID of the Container App's KubeEnvironment.
   */
readonly kubeEnvironmentId?: string;

/**
   * Container App versioned application definition.
   */
readonly template?: Template;

/**
   * ActiveRevisionsMode controls how active revisions are handled for the Container app:{list}{item}Multiple: multiple revisions can be active. If no value if provided, this is the default{/item}{item}Single: Only one revision can be active at a time. Revision weights can not be used in this mode{/item}{/list}
   */
readonly activeRevisionsMode?: 'multiple''single';

/**
   * Ingress configurations.
   */
readonly ingress?: Ingress;

/**
   * Collection of private container registry credentials for containers used by the Container app
   */
readonly registries?: RegistryCredentials[];

/**
   * Collection of secrets used by a Container app
   */
readonly secrets?: Secret[];

/**
   * Bool indicating if HTTP connections to is allowed. If set to false HTTP connections are automatically redirected to HTTPS connections
   */
readonly allowInsecure?: bool;

/**
   * Bool indicating if app exposes an external http endpoint
   */
readonly external?: bool;

/**
   * Target Port in containers for traffic from ingress
   */
readonly targetPort?: number;

/**
   * 
   */
readonly traffic?: TrafficWeight[];

/**
   * Ingress transport protocol
   */
readonly transport?: 'auto''http''http2';

/**
   * Indicates that the traffic weight belongs to a latest stable revision
   */
readonly latestRevision?: bool;

/**
   * Name of a revision
   */
readonly revisionName?: string;

/**
   * Traffic weight assigned to a revision
   */
readonly weight?: number;

/**
   * The name of the Secret that contains the registry login password
   */
readonly passwordSecretRef?: string;

/**
   * Container Registry Server
   */
readonly server?: string;

/**
   * Container Registry Username
   */
readonly username?: string;

/**
   * Secret Value.
   */
readonly value?: string;

/**
   * List of container definitions for the Container App.
   */
readonly containers?: Container[];

/**
   * Dapr configuration for the Container App.
   */
readonly dapr?: Dapr;

/**
   * User friendly suffix that is appended to the revision name
   */
readonly revisionSuffix?: string;

/**
   * Scaling properties for the Container App.
   */
readonly scale?: Scale;

/**
   * Container start command arguments.
   */
readonly args?: string[];

/**
   * Container start command.
   */
readonly command?: string[];

/**
   * Container environment variables.
   */
readonly env?: EnvironmentVar[];

/**
   * Container image tag.
   */
readonly image?: string;

/**
   * Container resource requirements.
   */
readonly resources?: ContainerResources;

/**
   * Name of the Container App secret from which to pull the environment variable value.
   */
readonly secretRef?: string;

/**
   * Non-secret environment variable value.
   */
readonly value?: string;

/**
   * Required CPU in cores, e.g. 0.5
   */
readonly cpu?: number;

/**
   * Required memory, e.g. "250Mb"
   */
readonly memory?: string;

/**
   * Dapr application identifier
   */
readonly appId?: string;

/**
   * Port on which the Dapr side car
   */
readonly appPort?: number;

/**
   * Collection of Dapr components
   */
readonly components?: DaprComponent[];

/**
   * Boolean indicating if the Dapr side car is enabled
   */
readonly enabled?: bool;

/**
   * Component metadata
   */
readonly metadata?: DaprMetadata[];

/**
   * Component type
   */
readonly type?: string;

/**
   * Component version
   */
readonly version?: string;

/**
   * Name of the Container App secret from which to pull the metadata property value.
   */
readonly secretRef?: string;

/**
   * Metadata property value.
   */
readonly value?: string;

/**
   * Optional. Maximum number of container replicas. Defaults to 10 if not set.
   */
readonly maxReplicas?: number;

/**
   * Optional. Minimum number of container replicas.
   */
readonly minReplicas?: number;

/**
   * Scaling rules.
   */
readonly rules?: ScaleRule[];

/**
   * Azure Queue based scaling.
   */
readonly azureQueue?: QueueScaleRule;

/**
   * Custom scale rule.
   */
readonly custom?: CustomScaleRule;

/**
   * HTTP requests based scaling.
   */
readonly http?: HttpScaleRule;

/**
   * Authentication secrets for the queue scale rule.
   */
readonly auth?: ScaleRuleAuth[];

/**
   * Queue length.
   */
readonly queueLength?: number;

/**
   * Queue name.
   */
readonly queueName?: string;

/**
   * Name of the Container App secret from which to pull the auth params.
   */
readonly secretRef?: string;

/**
   * Trigger Parameter that uses the secret
   */
readonly triggerParameter?: string;

/**
   * Authentication secrets for the custom scale rule.
   */
readonly auth?: ScaleRuleAuth[];

/**
   * Metadata properties to describe custom scale rule.
   */
readonly metadata?: object;

/**
   * Type of the custom scale ruleeg: azure-servicebus, redis etc.
   */
readonly type?: string;

/**
   * Authentication secrets for the custom scale rule.
   */
readonly auth?: ScaleRuleAuth[];

/**
   * Metadata properties to describe http scale rule.
   */
readonly metadata?: object;
}

/**
 * WebContainerapps resource
 */
export class WebContainerapps extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebContainerappsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/containerApps@2022-09-01";
  }

  protected getResourceBody(props: WebContainerappsProps): string {
    return JSON.stringify(
        {properties: {configuration: {activeRevisionsMode: "string", ingress: {allowInsecure: "${bool}", external: "${bool}", targetPort: "${int}", traffic: [{latestRevision: "${bool}", revisionName: "string", weight: "${int}"}], transport: "string"}, registries: [{passwordSecretRef: "string", server: "string", username: "string"}], secrets: [{name: "string", value: "string"}]}, kubeEnvironmentId: "string", template: {containers: [{args: ["string"], command: ["string"], env: [{name: "string", secretRef: "string", value: "string"}], image: "string", name: "string", resources: {cpu: "${int}", memory: "string"}}], dapr: {appId: "string", appPort: "${int}", components: [{metadata: [{name: "string", secretRef: "string", value: "string"}], name: "string", type: "string", version: "string"}], enabled: "${bool}"}, revisionSuffix: "string", scale: {maxReplicas: "${int}", minReplicas: "${int}", rules: [{azureQueue: {auth: [{secretRef: "string", triggerParameter: "string"}], queueLength: "${int}", queueName: "string"}, custom: {auth: [{secretRef: "string", triggerParameter: "string"}], metadata: {}, type: "string"}, http: {auth: [{secretRef: "string", triggerParameter: "string"}], metadata: {}}, name: "string"}]}}}, kind: "string"}
    );
  }
}
