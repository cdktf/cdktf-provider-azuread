// https://www.terraform.io/docs/providers/azuread/r/named_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamedLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location#display_name NamedLocation#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location#id NamedLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * country block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location#country NamedLocation#country}
  */
  readonly country?: NamedLocationCountry;
  /**
  * ip block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location#ip NamedLocation#ip}
  */
  readonly ip?: NamedLocationIp;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location#timeouts NamedLocation#timeouts}
  */
  readonly timeouts?: NamedLocationTimeouts;
}
export interface NamedLocationCountry {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location#countries_and_regions NamedLocation#countries_and_regions}
  */
  readonly countriesAndRegions: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location#include_unknown_countries_and_regions NamedLocation#include_unknown_countries_and_regions}
  */
  readonly includeUnknownCountriesAndRegions?: boolean | cdktf.IResolvable;
}

export function namedLocationCountryToTerraform(struct?: NamedLocationCountryOutputReference | NamedLocationCountry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    countries_and_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countriesAndRegions),
    include_unknown_countries_and_regions: cdktf.booleanToTerraform(struct!.includeUnknownCountriesAndRegions),
  }
}

export class NamedLocationCountryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamedLocationCountry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countriesAndRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.countriesAndRegions = this._countriesAndRegions;
    }
    if (this._includeUnknownCountriesAndRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeUnknownCountriesAndRegions = this._includeUnknownCountriesAndRegions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamedLocationCountry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._countriesAndRegions = undefined;
      this._includeUnknownCountriesAndRegions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
    return this.getBooleanAttribute('include_unknown_countries_and_regions');
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location#ip_ranges NamedLocation#ip_ranges}
  */
  readonly ipRanges: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location#trusted NamedLocation#trusted}
  */
  readonly trusted?: boolean | cdktf.IResolvable;
}

export function namedLocationIpToTerraform(struct?: NamedLocationIpOutputReference | NamedLocationIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
    trusted: cdktf.booleanToTerraform(struct!.trusted),
  }
}

export class NamedLocationIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamedLocationIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    if (this._trusted !== undefined) {
      hasAnyValues = true;
      internalValueResult.trusted = this._trusted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamedLocationIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipRanges = undefined;
      this._trusted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
    return this.getBooleanAttribute('trusted');
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location#create NamedLocation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location#delete NamedLocation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location#read NamedLocation#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/named_location#update NamedLocation#update}
  */
  readonly update?: string;
}

export function namedLocationTimeoutsToTerraform(struct?: NamedLocationTimeoutsOutputReference | NamedLocationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamedLocationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamedLocationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/named_location azuread_named_location}
*/
export class NamedLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_named_location";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/named_location azuread_named_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamedLocationConfig
  */
  public constructor(scope: Construct, id: string, config: NamedLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_named_location',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.37.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // country - computed: false, optional: true, required: false
  private _country = new NamedLocationCountryOutputReference(this, "country");
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
  private _ip = new NamedLocationIpOutputReference(this, "ip");
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
  private _timeouts = new NamedLocationTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      country: namedLocationCountryToTerraform(this._country.internalValue),
      ip: namedLocationIpToTerraform(this._ip.internalValue),
      timeouts: namedLocationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
