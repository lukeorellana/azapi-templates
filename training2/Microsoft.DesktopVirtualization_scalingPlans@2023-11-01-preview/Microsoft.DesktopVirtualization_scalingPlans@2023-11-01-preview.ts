import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * 
   */
readonly sku?: ResourceModelWithAllowedPropertySetSku;

/**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value.
   */
readonly kind?: stringConstranumbers:Pattern =^[-\w\._,\(\)]+$;

/**
   * 
   */
readonly identity?: ResourceModelWithAllowedPropertySetIdentity;

/**
   * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
   */
readonly managedBy?: string;

/**
   * 
   */
readonly plan?: ResourceModelWithAllowedPropertySetPlan;

/**
   * The identity type.
   */
readonly type?: 'SystemAssigned';

/**
   * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
   */
readonly product: string;

/**
   * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
   */
readonly promotionCode?: string;

/**
   * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
   */
readonly publisher: string;

/**
   * The version of the desired product/artifact.
   */
readonly version?: string;

/**
   * Description of scaling plan.
   */
readonly description?: string;

/**
   * Exclusion tag for scaling plan.
   */
readonly exclusionTag?: string;

/**
   * User friendly name of scaling plan.
   */
readonly friendlyName?: string;

/**
   * List of ScalingHostPoolReference definitions.
   */
readonly hostPoolReferences?: ScalingHostPoolReference[];

/**
   * HostPool type for desktop.
   */
readonly hostPoolType?: 'Pooled';

/**
   * List of ScalingPlanPooledSchedule definitions.
   */
readonly schedules?: ScalingSchedule[];

/**
   * Timezone of the scaling plan.
   */
readonly timeZone: string;

/**
   * Arm path of referenced hostpool.
   */
readonly hostPoolArmPath?: string;

/**
   * Is the scaling plan enabled for this hostpool.
   */
readonly scalingPlanEnabled?: bool;

/**
   * Set of days of the week on which this schedule is active.
   */
readonly daysOfWeek?: String array containing any of:'Friday''Monday''Saturday''Sunday''Thursday''Tuesday''Wednesday';

/**
   * Load balancing algorithm for off-peak period.
   */
readonly offPeakLoadBalancingAlgorithm?: 'BreadthFirst''DepthFirst';

/**
   * Starting time for off-peak period.
   */
readonly offPeakStartTime?: Time;

/**
   * Load balancing algorithm for peak period.
   */
readonly peakLoadBalancingAlgorithm?: 'BreadthFirst''DepthFirst';

/**
   * Starting time for peak period.
   */
readonly peakStartTime?: Time;

/**
   * Capacity threshold for ramp down period.
   */
readonly rampDownCapacityThresholdPct?: numberConstranumbers:Min value = 1Max value = 100;

/**
   * Should users be logged off forcefully from hosts.
   */
readonly rampDownForceLogoffUsers?: bool;

/**
   * Load balancing algorithm for ramp down period.
   */
readonly rampDownLoadBalancingAlgorithm?: 'BreadthFirst''DepthFirst';

/**
   * Minimum host percentage for ramp down period.
   */
readonly rampDownMinimumHostsPct?: numberConstranumbers:Min value = 0Max value = 100;

/**
   * Notification message for users during ramp down period.
   */
readonly rampDownNotificationMessage?: string;

/**
   * Starting time for ramp down period.
   */
readonly rampDownStartTime?: Time;

/**
   * Specifies when to stop hosts during ramp down period.
   */
readonly rampDownStopHostsWhen?: 'ZeroActiveSessions''ZeroSessions';

/**
   * Number of minutes to wait to stop hosts during ramp down period.
   */
readonly rampDownWaitTimeMinutes?: number;

/**
   * Capacity threshold for ramp up period.
   */
readonly rampUpCapacityThresholdPct?: numberConstranumbers:Min value = 1Max value = 100;

/**
   * Load balancing algorithm for ramp up period.
   */
readonly rampUpLoadBalancingAlgorithm?: 'BreadthFirst''DepthFirst';

/**
   * Minimum host percentage for ramp up period.
   */
readonly rampUpMinimumHostsPct?: numberConstranumbers:Min value = 0Max value = 100;

/**
   * Starting time for ramp up period.
   */
readonly rampUpStartTime?: Time;

/**
   * The hour.
   */
readonly hour: number Constranumbers:Min value = 0Max value = 23;

/**
   * The minute.
   */
readonly minute: number Constranumbers:Min value = 0Max value = 59;

/**
   * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
   */
readonly capacity?: number;

/**
   * If the service has different generations of hardware, for the same SKU, then that can be captured here.
   */
readonly family?: string;

/**
   * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
   */
readonly size?: string;

/**
   * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
   */
readonly tier?: 'Basic''Free''Premium''Standard';
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
