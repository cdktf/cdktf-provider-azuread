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
  readonly country?: NamedLocationCountry[];
  /**
  * ip block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location.html#ip NamedLocation#ip}
  */
  readonly ip?: NamedLocationIp[];
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

function namedLocationCountryToTerraform(struct?: NamedLocationCountry): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    countries_and_regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countriesAndRegions),
    include_unknown_countries_and_regions: cdktf.booleanToTerraform(struct!.includeUnknownCountriesAndRegions),
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

function namedLocationIpToTerraform(struct?: NamedLocationIp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipRanges),
    trusted: cdktf.booleanToTerraform(struct!.trusted),
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

function namedLocationTimeoutsToTerraform(struct?: NamedLocationTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
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
    this._country = config.country;
    this._ip = config.ip;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // country - computed: false, optional: true, required: false
  private _country?: NamedLocationCountry[];
  public get country() {
    return this.interpolationForAttribute('country') as any;
  }
  public set country(value: NamedLocationCountry[] ) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: NamedLocationIp[];
  public get ip() {
    return this.interpolationForAttribute('ip') as any;
  }
  public set ip(value: NamedLocationIp[] ) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NamedLocationTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NamedLocationTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      country: cdktf.listMapper(namedLocationCountryToTerraform)(this._country),
      ip: cdktf.listMapper(namedLocationIpToTerraform)(this._ip),
      timeouts: namedLocationTimeoutsToTerraform(this._timeouts),
    };
  }
}
