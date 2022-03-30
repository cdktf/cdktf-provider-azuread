// https://www.terraform.io/docs/providers/azuread
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureadProviderConfig {
  /**
  * Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#client_certificate AzureadProvider#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#client_certificate_password AzureadProvider#client_certificate_password}
  */
  readonly clientCertificatePassword?: string;
  /**
  * The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#client_certificate_path AzureadProvider#client_certificate_path}
  */
  readonly clientCertificatePath?: string;
  /**
  * The Client ID which should be used for service principal authentication
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#client_id AzureadProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The application password to use when authenticating as a Service Principal using a Client Secret
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#client_secret AzureadProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#disable_terraform_partner_id AzureadProvider#disable_terraform_partner_id}
  */
  readonly disableTerraformPartnerId?: boolean | cdktf.IResolvable;
  /**
  * The cloud environment which should be used. Possible values are: `global` (also `public`), `usgovernmentl4` (also `usgovernment`), `usgovernmentl5` (also `dod`), and `china`. Defaults to `global`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#environment AzureadProvider#environment}
  */
  readonly environment?: string;
  /**
  * The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#msi_endpoint AzureadProvider#msi_endpoint}
  */
  readonly msiEndpoint?: string;
  /**
  * A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#partner_id AzureadProvider#partner_id}
  */
  readonly partnerId?: string;
  /**
  * The Tenant ID which should be used. Works with all authentication methods except Managed Identity
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#tenant_id AzureadProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Allow Azure CLI to be used for Authentication
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#use_cli AzureadProvider#use_cli}
  */
  readonly useCli?: boolean | cdktf.IResolvable;
  /**
  * Allow Managed Identity to be used for Authentication
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#use_msi AzureadProvider#use_msi}
  */
  readonly useMsi?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread#alias AzureadProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread azuread}
*/
export class AzureadProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread azuread} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureadProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AzureadProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.19.1',
        providerVersionConstraint: '~> 2.0'
      },
      terraformProviderSource: 'hashicorp/azuread'
    });
    this._clientCertificate = config.clientCertificate;
    this._clientCertificatePassword = config.clientCertificatePassword;
    this._clientCertificatePath = config.clientCertificatePath;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._disableTerraformPartnerId = config.disableTerraformPartnerId;
    this._environment = config.environment;
    this._msiEndpoint = config.msiEndpoint;
    this._partnerId = config.partnerId;
    this._tenantId = config.tenantId;
    this._useCli = config.useCli;
    this._useMsi = config.useMsi;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public set clientCertificate(value: string | undefined) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_certificate_password - computed: false, optional: true, required: false
  private _clientCertificatePassword?: string; 
  public get clientCertificatePassword() {
    return this._clientCertificatePassword;
  }
  public set clientCertificatePassword(value: string | undefined) {
    this._clientCertificatePassword = value;
  }
  public resetClientCertificatePassword() {
    this._clientCertificatePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePasswordInput() {
    return this._clientCertificatePassword;
  }

  // client_certificate_path - computed: false, optional: true, required: false
  private _clientCertificatePath?: string; 
  public get clientCertificatePath() {
    return this._clientCertificatePath;
  }
  public set clientCertificatePath(value: string | undefined) {
    this._clientCertificatePath = value;
  }
  public resetClientCertificatePath() {
    this._clientCertificatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificatePathInput() {
    return this._clientCertificatePath;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // disable_terraform_partner_id - computed: false, optional: true, required: false
  private _disableTerraformPartnerId?: boolean | cdktf.IResolvable; 
  public get disableTerraformPartnerId() {
    return this._disableTerraformPartnerId;
  }
  public set disableTerraformPartnerId(value: boolean | cdktf.IResolvable | undefined) {
    this._disableTerraformPartnerId = value;
  }
  public resetDisableTerraformPartnerId() {
    this._disableTerraformPartnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTerraformPartnerIdInput() {
    return this._disableTerraformPartnerId;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this._environment;
  }
  public set environment(value: string | undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // msi_endpoint - computed: false, optional: true, required: false
  private _msiEndpoint?: string; 
  public get msiEndpoint() {
    return this._msiEndpoint;
  }
  public set msiEndpoint(value: string | undefined) {
    this._msiEndpoint = value;
  }
  public resetMsiEndpoint() {
    this._msiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msiEndpointInput() {
    return this._msiEndpoint;
  }

  // partner_id - computed: false, optional: true, required: false
  private _partnerId?: string; 
  public get partnerId() {
    return this._partnerId;
  }
  public set partnerId(value: string | undefined) {
    this._partnerId = value;
  }
  public resetPartnerId() {
    this._partnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerIdInput() {
    return this._partnerId;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this._tenantId;
  }
  public set tenantId(value: string | undefined) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // use_cli - computed: false, optional: true, required: false
  private _useCli?: boolean | cdktf.IResolvable; 
  public get useCli() {
    return this._useCli;
  }
  public set useCli(value: boolean | cdktf.IResolvable | undefined) {
    this._useCli = value;
  }
  public resetUseCli() {
    this._useCli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCliInput() {
    return this._useCli;
  }

  // use_msi - computed: false, optional: true, required: false
  private _useMsi?: boolean | cdktf.IResolvable; 
  public get useMsi() {
    return this._useMsi;
  }
  public set useMsi(value: boolean | cdktf.IResolvable | undefined) {
    this._useMsi = value;
  }
  public resetUseMsi() {
    this._useMsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMsiInput() {
    return this._useMsi;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      client_certificate_password: cdktf.stringToTerraform(this._clientCertificatePassword),
      client_certificate_path: cdktf.stringToTerraform(this._clientCertificatePath),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      disable_terraform_partner_id: cdktf.booleanToTerraform(this._disableTerraformPartnerId),
      environment: cdktf.stringToTerraform(this._environment),
      msi_endpoint: cdktf.stringToTerraform(this._msiEndpoint),
      partner_id: cdktf.stringToTerraform(this._partnerId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_cli: cdktf.booleanToTerraform(this._useCli),
      use_msi: cdktf.booleanToTerraform(this._useMsi),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
