export interface instancePools {
  /**
   * The name and tier of the SKU.
   */
  readonly sku?: any;
  /**
   * Resource properties.
   */
  readonly properties?: any;
}

export interface InstancePoolProperties {
  /**
   * The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price).
   */
  readonly licenseType: "baseprice""licenseincluded";
  /**
   * Resource ID of the subnet to place this instance pool in.
   */
  readonly subnetId: string;
  /**
   * Count of vCores belonging to this instance pool.
   */
  readonly vCores: int;
}

export interface Sku {
  /**
   * Capacity of the particular SKU.
   */
  readonly capacity?: int;
  /**
   * If the service has different generations of hardware, for the same SKU, then that can be captured here.
   */
  readonly family?: string;
  /**
   * Size of the particular SKU
   */
  readonly size?: string;
  /**
   * The tier or edition of the particular SKU, e.g. Basic, Premium.
   */
  readonly tier?: string;
}