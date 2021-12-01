// https://www.terraform.io/docs/providers/azuread/r/named_location.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamedLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#display_name NamedLocation#display_name}
  */
  readonly displayName: string;
  /**
  * country block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#country NamedLocation#country}
  */
  readonly country?: NamedLocationCountry;
  /**
  * ip block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#ip NamedLocation#ip}
  */
  readonly ip?: NamedLocationIp;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#timeouts NamedLocation#timeouts}
  */
  readonly timeouts?: NamedLocationTimeouts;
}
export interface NamedLocationCountry {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#countries_and_regions NamedLocation#countries_and_regions}
  */
  readonly countriesAndRegions: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#include_unknown_countries_and_regions NamedLocation#include_unknown_countries_and_regions}
  */
  readonly includeUnknownCountriesAndRegions?: boolean | cdktf.IResolvable;
}

export function namedLocationCountryToTerraform(struct?: NamedLocationCountryOutputReference | NamedLocationCountry): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    countries_and_regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countriesAndRegions),
    include_unknown_countries_and_regions: cdktf.booleanToTerraform(struct!.includeUnknownCountriesAndRegions),
  }
}

export class NamedLocationCountryOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NamedLocationCountry | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._countriesAndRegions) {
      hasAnyValues = true;
      internalValueResult.countriesAndRegions = this._countriesAndRegions;
    }
    if (this._includeUnknownCountriesAndRegions) {
      hasAnyValues = true;
      internalValueResult.includeUnknownCountriesAndRegions = this._includeUnknownCountriesAndRegions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamedLocationCountry | undefined) {
    if (value === undefined) {
      this._countriesAndRegions = undefined;
      this._includeUnknownCountriesAndRegions = undefined;
    }
    else {
      this._countriesAndRegions = value.countriesAndRegions;
      this._includeUnknownCountriesAndRegions = value.includeUnknownCountriesAndRegions;
    }
  }

  // countries_and_regions - computed: false, optional: false, required: true
  private _countriesAndRegions?: string[]; 
  public get countriesAndRegions() {
    return this.getListAttribute('countries_and_regions');
  }
  public set countriesAndRegions(value: string[]) {
    this._countriesAndRegions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesAndRegionsInput() {
    return this._countriesAndRegions;
  }

  // include_unknown_countries_and_regions - computed: false, optional: true, required: false
  private _includeUnknownCountriesAndRegions?: boolean | cdktf.IResolvable; 
  public get includeUnknownCountriesAndRegions() {
    return this.getBooleanAttribute('include_unknown_countries_and_regions') as any;
  }
  public set includeUnknownCountriesAndRegions(value: boolean | cdktf.IResolvable) {
    this._includeUnknownCountriesAndRegions = value;
  }
  public resetIncludeUnknownCountriesAndRegions() {
    this._includeUnknownCountriesAndRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUnknownCountriesAndRegionsInput() {
    return this._includeUnknownCountriesAndRegions;
  }
}
export interface NamedLocationIp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#ip_ranges NamedLocation#ip_ranges}
  */
  readonly ipRanges: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#trusted NamedLocation#trusted}
  */
  readonly trusted?: boolean | cdktf.IResolvable;
}

export function namedLocationIpToTerraform(struct?: NamedLocationIpOutputReference | NamedLocationIp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipRanges),
    trusted: cdktf.booleanToTerraform(struct!.trusted),
  }
}

export class NamedLocationIpOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NamedLocationIp | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._ipRanges) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    if (this._trusted) {
      hasAnyValues = true;
      internalValueResult.trusted = this._trusted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamedLocationIp | undefined) {
    if (value === undefined) {
      this._ipRanges = undefined;
      this._trusted = undefined;
    }
    else {
      this._ipRanges = value.ipRanges;
      this._trusted = value.trusted;
    }
  }

  // ip_ranges - computed: false, optional: false, required: true
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }

  // trusted - computed: false, optional: true, required: false
  private _trusted?: boolean | cdktf.IResolvable; 
  public get trusted() {
    return this.getBooleanAttribute('trusted') as any;
  }
  public set trusted(value: boolean | cdktf.IResolvable) {
    this._trusted = value;
  }
  public resetTrusted() {
    this._trusted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedInput() {
    return this._trusted;
  }
}
export interface NamedLocationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#create NamedLocation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#delete NamedLocation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#read NamedLocation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#update NamedLocation#update}
  */
  readonly update?: string;
}

export function namedLocationTimeoutsToTerraform(struct?: NamedLocationTimeoutsOutputReference | NamedLocationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class NamedLocationTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): NamedLocationTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamedLocationTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html azuread_named_location}
*/
export class NamedLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_named_location";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html azuread_named_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamedLocationConfig
  */
  public constructor(scope: Construct, id: string, config: NamedLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_named_location',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._country.internalValue = config.country;
    this._ip.internalValue = config.ip;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // country - computed: false, optional: true, required: false
  private _country = new NamedLocationCountryOutputReference(this as any, "country", true);
  public get country() {
    return this._country;
  }
  public putCountry(value: NamedLocationCountry) {
    this._country.internalValue = value;
  }
  public resetCountry() {
    this._country.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new NamedLocationIpOutputReference(this as any, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: NamedLocationIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NamedLocationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NamedLocationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      country: namedLocationCountryToTerraform(this._country.internalValue),
      ip: namedLocationIpToTerraform(this._ip.internalValue),
      timeouts: namedLocationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
