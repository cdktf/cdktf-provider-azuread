// https://www.terraform.io/docs/providers/azuread/d/domains.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadDomainsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to `true` to only return domains whose DNS is managed by Microsoft 365
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/domains.html#admin_managed DataAzureadDomains#admin_managed}
  */
  readonly adminManaged?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` if unverified Azure AD domains should be included
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/domains.html#include_unverified DataAzureadDomains#include_unverified}
  */
  readonly includeUnverified?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to only return the default domain
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/domains.html#only_default DataAzureadDomains#only_default}
  */
  readonly onlyDefault?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to only return the initial domain, which is your primary Azure Active Directory tenant domain
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/domains.html#only_initial DataAzureadDomains#only_initial}
  */
  readonly onlyInitial?: boolean | cdktf.IResolvable;
  /**
  * Set to `true` to only return verified root domains. Excludes subdomains and unverified domains
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/domains.html#only_root DataAzureadDomains#only_root}
  */
  readonly onlyRoot?: boolean | cdktf.IResolvable;
  /**
  * A list of supported services that must be supported by a domain
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/domains.html#supports_services DataAzureadDomains#supports_services}
  */
  readonly supportsServices?: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/domains.html#timeouts DataAzureadDomains#timeouts}
  */
  readonly timeouts?: DataAzureadDomainsTimeouts;
}
export class DataAzureadDomainsDomains extends cdktf.ComplexComputedList {

  // admin_managed - computed: true, optional: false, required: false
  public get adminManaged() {
    return this.getBooleanAttribute('admin_managed') as any;
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default') as any;
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // initial - computed: true, optional: false, required: false
  public get initial() {
    return this.getBooleanAttribute('initial') as any;
  }

  // root - computed: true, optional: false, required: false
  public get root() {
    return this.getBooleanAttribute('root') as any;
  }

  // supported_services - computed: true, optional: false, required: false
  public get supportedServices() {
    return this.getListAttribute('supported_services');
  }

  // verified - computed: true, optional: false, required: false
  public get verified() {
    return this.getBooleanAttribute('verified') as any;
  }
}
export interface DataAzureadDomainsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/domains.html#read DataAzureadDomains#read}
  */
  readonly read?: string;
}

export function dataAzureadDomainsTimeoutsToTerraform(struct?: DataAzureadDomainsTimeoutsOutputReference | DataAzureadDomainsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzureadDomainsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzureadDomainsTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzureadDomainsTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azuread/d/domains.html azuread_domains}
*/
export class DataAzureadDomains extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_domains";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/d/domains.html azuread_domains} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadDomainsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadDomainsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_domains',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminManaged = config.adminManaged;
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
    return this.getBooleanAttribute('admin_managed') as any;
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
  public domains(index: string) {
    return new DataAzureadDomainsDomains(this, 'domains', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_unverified - computed: false, optional: true, required: false
  private _includeUnverified?: boolean | cdktf.IResolvable; 
  public get includeUnverified() {
    return this.getBooleanAttribute('include_unverified') as any;
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
    return this.getBooleanAttribute('only_default') as any;
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
    return this.getBooleanAttribute('only_initial') as any;
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
    return this.getBooleanAttribute('only_root') as any;
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
  private _timeouts = new DataAzureadDomainsTimeoutsOutputReference(this as any, "timeouts", true);
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
      include_unverified: cdktf.booleanToTerraform(this._includeUnverified),
      only_default: cdktf.booleanToTerraform(this._onlyDefault),
      only_initial: cdktf.booleanToTerraform(this._onlyInitial),
      only_root: cdktf.booleanToTerraform(this._onlyRoot),
      supports_services: cdktf.listMapper(cdktf.stringToTerraform)(this._supportsServices),
      timeouts: dataAzureadDomainsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
