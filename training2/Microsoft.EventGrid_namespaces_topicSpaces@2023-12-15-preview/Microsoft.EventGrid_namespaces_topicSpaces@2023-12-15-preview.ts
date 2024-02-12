import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridNamespacesTopicspacesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * Description for the Topic Space resource.
   */
readonly description?: string;

/**
   * The topic filters in the topic space.Example: "topicTemplates": ["devices/foo/bar","devices/topic1/+","devices/${principal.name}/${principal.attributes.keyName}" ].
   */
readonly topicTemplates?: string[];
}

/**
 * EventgridNamespacesTopicspaces resource
 */
export class EventgridNamespacesTopicspaces extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridNamespacesTopicspacesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/namespaces/topicSpaces@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridNamespacesTopicspacesProps): string {
    return JSON.stringify(
        {properties: {description: "string", topicTemplates: ["string"]}}
    );
  }
}
