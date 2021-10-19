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

function namedLocationCountryToTerraform(struct?: NamedLocationCountryOutputReference | NamedLocationCountry): any {
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
    return this._countriesAndRegions
  }

  // include_unknown_countries_and_regions - computed: false, optional: true, required: false
  private _includeUnknownCountriesAndRegions?: boolean | cdktf.IResolvable | undefined; 
  public get includeUnknownCountriesAndRegions() {
    return this.getBooleanAttribute('include_unknown_countries_and_regions') as any;
  }
  public set includeUnknownCountriesAndRegions(value: boolean | cdktf.IResolvable | undefined) {
    this._includeUnknownCountriesAndRegions = value;
  }
  public resetIncludeUnknownCountriesAndRegions() {
    this._includeUnknownCountriesAndRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUnknownCountriesAndRegionsInput() {
    return this._includeUnknownCountriesAndRegions
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

function namedLocationIpToTerraform(struct?: NamedLocationIpOutputReference | NamedLocationIp): any {
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
    return this._ipRanges
  }

  // trusted - computed: false, optional: true, required: false
  private _trusted?: boolean | cdktf.IResolvable | undefined; 
  public get trusted() {
    return this.getBooleanAttribute('trusted') as any;
  }
  public set trusted(value: boolean | cdktf.IResolvable | undefined) {
    this._trusted = value;
  }
  public resetTrusted() {
    this._trusted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedInput() {
    return this._trusted
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

function namedLocationTimeoutsToTerraform(struct?: NamedLocationTimeoutsOutputReference | NamedLocationTimeouts): any {
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

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
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
  private _displayName?: string; 
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
  private _country?: NamedLocationCountry | undefined; 
  private __countryOutput = new NamedLocationCountryOutputReference(this as any, "country", true);
  public get country() {
    return this.__countryOutput;
  }
  public putCountry(value: NamedLocationCountry | undefined) {
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
  private _ip?: NamedLocationIp | undefined; 
  private __ipOutput = new NamedLocationIpOutputReference(this as any, "ip", true);
  public get ip() {
    return this.__ipOutput;
  }
  public putIp(value: NamedLocationIp | undefined) {
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
  private _timeouts?: NamedLocationTimeouts | undefined; 
  private __timeoutsOutput = new NamedLocationTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: NamedLocationTimeouts | undefined) {
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
      country: namedLocationCountryToTerraform(this._country),
      ip: namedLocationIpToTerraform(this._ip),
      timeouts: namedLocationTimeoutsToTerraform(this._timeouts),
    };
  }
}
