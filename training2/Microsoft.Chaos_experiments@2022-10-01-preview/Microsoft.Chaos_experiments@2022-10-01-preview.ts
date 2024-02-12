import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ChaosExperimentsProps extends IAzAPIBaseProps {
/**
   * The identity of the experiment resource.
   */
readonly identity?: ResourceIdentity;

/**
   * String of the resource identity type.
   */
readonly type: 'None''SystemAssigned';

/**
   * List of selectors.
   */
readonly selectors: Selector[];

/**
   * A boolean value that indicates if experiment should be started on creation or not.
   */
readonly startOnCreation?: bool;

/**
   * List of steps.
   */
readonly steps: Step[];

/**
   * Model that represents available filter types that can be applied to a targets list.
   */
readonly filter?: Filter;

/**
   * String of the selector ID.
   */
readonly id: string;

/**
   * List of Target references.
   */
readonly targets: TargetReference[];

/**
   * Enum of the selector type.
   */
readonly type: 'List''Percent''Random''Tag';

/**
   * Set the object type
   */
readonly type: Simple;

/**
   * Enum that discriminates between filter types. Currently onlySimpletype is supported.
   */
readonly type: 'Simple';

/**
   * Model that represents the Simple filter parameters.
   */
readonly parameters?: SimpleFilterParameters;

/**
   * List of Azure availability zones to filter targets by.
   */
readonly zones?: string[];

/**
   * String of the resource ID of a Target resource.
   */
readonly id: string;

/**
   * Enum of the Target reference type.
   */
readonly type: 'ChaosTarget';

/**
   * List of branches.
   */
readonly branches: Branch[];

/**
   * List of actions.
   */
readonly actions: Action[];

/**
   * Set the object type
   */
readonly type: continuousdelaydiscrete;

/**
   * Enum that discriminates between action models.
   */
readonly type: 'continuous';

/**
   * ISO8601 formatted string that represents a duration.
   */
readonly duration: string;

/**
   * List of key value pairs.
   */
readonly parameters: KeyValuePair[];

/**
   * String that represents a selector.
   */
readonly selectorId: string;

/**
   * The name of the setting for the action.
   */
readonly key: string;

/**
   * The value of the setting for the action.
   */
readonly value: string;

/**
   * Enum that discriminates between action models.
   */
readonly type: 'delay';

/**
   * ISO8601 formatted string that represents a duration.
   */
readonly duration: string;

/**
   * Enum that discriminates between action models.
   */
readonly type: 'discrete';

/**
   * List of key value pairs.
   */
readonly parameters: KeyValuePair[];

/**
   * String that represents a selector.
   */
readonly selectorId: string;
}

/**
 * ChaosExperiments resource
 */
export class ChaosExperiments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ChaosExperimentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Chaos/experiments@2022-10-01-preview";
  }

  protected getResourceBody(props: ChaosExperimentsProps): string {
    return JSON.stringify(
        {properties: {selectors: [{filter: {type: "string"}, id: "string", targets: [{id: "string", type: "ChaosTarget"}], type: "string"}], startOnCreation: "${bool}", steps: [{branches: [{actions: [{name: "string", type: "string"}], name: "string"}], name: "string"}]}}
    );
  }
}
