// https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/data-sources/domains
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadDomainsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to `true` to only return domains whose DNS is managed by Microsoft 365
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/data-sources/domains#admin_managed DataAzureadDomains#admin_managed}
  */
  readonly adminManaged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/data-sources/domains#id DataAzureadDomains#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set to `true` if unverified Azure AD domains should be included
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/data-sources/domains#include_unverified DataAzureadDomains#include_unverified}
  */
  readonly includeUnverified?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to only return the default domain
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/data-sources/domains#only_default DataAzureadDomains#only_default}
  */
  readonly onlyDefault?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to only return the initial domain, which is your primary Azure Active Directory tenant domain
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/data-sources/domains#only_initial DataAzureadDomains#only_initial}
  */
  readonly onlyInitial?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to only return verified root domains. Excludes subdomains and unverified domains
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/data-sources/domains#only_root DataAzureadDomains#only_root}
  */
  readonly onlyRoot?: boolean | cdktf.IResolvable;
  /**
  * A list of supported services that must be supported by a domain
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/data-sources/domains#supports_services DataAzureadDomains#supports_services}
  */
  readonly supportsServices?: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/data-sources/domains#timeouts DataAzureadDomains#timeouts}
  */
  readonly timeouts?: DataAzureadDomainsTimeouts;
}
export interface DataAzureadDomainsDomains {
}

export function dataAzureadDomainsDomainsToTerraform(struct?: DataAzureadDomainsDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAzureadDomainsDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAzureadDomainsDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadDomainsDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_managed - computed: true, optional: false, required: false
  public get adminManaged() {
    return this.getBooleanAttribute('admin_managed');
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // initial - computed: true, optional: false, required: false
  public get initial() {
    return this.getBooleanAttribute('initial');
  }

  // root - computed: true, optional: false, required: false
  public get root() {
    return this.getBooleanAttribute('root');
  }

  // supported_services - computed: true, optional: false, required: false
  public get supportedServices() {
    return this.getListAttribute('supported_services');
  }

  // verified - computed: true, optional: false, required: false
  public get verified() {
    return this.getBooleanAttribute('verified');
  }
}

export class DataAzureadDomainsDomainsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAzureadDomainsDomainsOutputReference {
    return new DataAzureadDomainsDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzureadDomainsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/data-sources/domains#read DataAzureadDomains#read}
  */
  readonly read?: string;
}

export function dataAzureadDomainsTimeoutsToTerraform(struct?: DataAzureadDomainsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzureadDomainsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzureadDomainsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadDomainsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/data-sources/domains azuread_domains}
*/
export class DataAzureadDomains extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_domains";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.1/docs/data-sources/domains azuread_domains} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadDomainsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadDomainsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_domains',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.37.1',
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
    this._adminManaged = config.adminManaged;
    this._id = config.id;
    this._includeUnverified = config.includeUnverified;
    this._onlyDefault = config.onlyDefault;
    this._onlyInitial = config.onlyInitial;
    this._onlyRoot = config.onlyRoot;
    this._supportsServices = config.supportsServices;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_managed - computed: false, optional: true, required: false
  private _adminManaged?: boolean | cdktf.IResolvable; 
  public get adminManaged() {
    return this.getBooleanAttribute('admin_managed');
  }
  public set adminManaged(value: boolean | cdktf.IResolvable) {
    this._adminManaged = value;
  }
  public resetAdminManaged() {
    this._adminManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminManagedInput() {
    return this._adminManaged;
  }

  // domains - computed: true, optional: false, required: false
  private _domains = new DataAzureadDomainsDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
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

  // include_unverified - computed: false, optional: true, required: false
  private _includeUnverified?: boolean | cdktf.IResolvable; 
  public get includeUnverified() {
    return this.getBooleanAttribute('include_unverified');
  }
  public set includeUnverified(value: boolean | cdktf.IResolvable) {
    this._includeUnverified = value;
  }
  public resetIncludeUnverified() {
    this._includeUnverified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUnverifiedInput() {
    return this._includeUnverified;
  }

  // only_default - computed: false, optional: true, required: false
  private _onlyDefault?: boolean | cdktf.IResolvable; 
  public get onlyDefault() {
    return this.getBooleanAttribute('only_default');
  }
  public set onlyDefault(value: boolean | cdktf.IResolvable) {
    this._onlyDefault = value;
  }
  public resetOnlyDefault() {
    this._onlyDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyDefaultInput() {
    return this._onlyDefault;
  }

  // only_initial - computed: false, optional: true, required: false
  private _onlyInitial?: boolean | cdktf.IResolvable; 
  public get onlyInitial() {
    return this.getBooleanAttribute('only_initial');
  }
  public set onlyInitial(value: boolean | cdktf.IResolvable) {
    this._onlyInitial = value;
  }
  public resetOnlyInitial() {
    this._onlyInitial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyInitialInput() {
    return this._onlyInitial;
  }

  // only_root - computed: false, optional: true, required: false
  private _onlyRoot?: boolean | cdktf.IResolvable; 
  public get onlyRoot() {
    return this.getBooleanAttribute('only_root');
  }
  public set onlyRoot(value: boolean | cdktf.IResolvable) {
    this._onlyRoot = value;
  }
  public resetOnlyRoot() {
    this._onlyRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyRootInput() {
    return this._onlyRoot;
  }

  // supports_services - computed: false, optional: true, required: false
  private _supportsServices?: string[]; 
  public get supportsServices() {
    return this.getListAttribute('supports_services');
  }
  public set supportsServices(value: string[]) {
    this._supportsServices = value;
  }
  public resetSupportsServices() {
    this._supportsServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportsServicesInput() {
    return this._supportsServices;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzureadDomainsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzureadDomainsTimeouts) {
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
      admin_managed: cdktf.booleanToTerraform(this._adminManaged),
      id: cdktf.stringToTerraform(this._id),
      include_unverified: cdktf.booleanToTerraform(this._includeUnverified),
      only_default: cdktf.booleanToTerraform(this._onlyDefault),
      only_initial: cdktf.booleanToTerraform(this._onlyInitial),
      only_root: cdktf.booleanToTerraform(this._onlyRoot),
      supports_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportsServices),
      timeouts: dataAzureadDomainsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
