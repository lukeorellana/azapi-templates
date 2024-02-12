import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:updates;

/**
   * Duration of the update run.
   */
readonly duration?: string;

/**
   * Timestamp of the most recently completed step in the update run.
   */
readonly lastUpdatedTime?: string;

/**
   * Progress representation of the update run steps.
   */
readonly progress?: Step;

/**
   * State of the update run.
   */
readonly state?: 'Failed''InProgress''Succeeded''Unknown';

/**
   * Timestamp of the update run was started.
   */
readonly timeStarted?: string;

/**
   * More detailed description of the step.
   */
readonly description?: string;

/**
   * When the step reached a terminal state.
   */
readonly endTimeUtc?: string;

/**
   * Error message, specified if the step is in a failed state.
   */
readonly errorMessage?: string;

/**
   * Completion time of this step or the last completed sub-step.
   */
readonly lastUpdatedTimeUtc?: string;

/**
   * When the step started, or empty if it has not started executing.
   */
readonly startTimeUtc?: string;

/**
   * Status of the step, bubbled up from the ECE action plan for installation attempts. Values are: 'Success', 'Error', 'InProgress', and 'Unknown status'.
   */
readonly status?: string;

/**
   * Recursive model for child steps of this step.
   */
readonly steps?: Step[];
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
