/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureadProviderConfig {
  /**
  * Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#client_certificate AzureadProvider#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#client_certificate_password AzureadProvider#client_certificate_password}
  */
  readonly clientCertificatePassword?: string;
  /**
  * The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#client_certificate_path AzureadProvider#client_certificate_path}
  */
  readonly clientCertificatePath?: string;
  /**
  * The Client ID which should be used for service principal authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#client_id AzureadProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * The path to a file containing the Client ID which should be used for service principal authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#client_id_file_path AzureadProvider#client_id_file_path}
  */
  readonly clientIdFilePath?: string;
  /**
  * The application password to use when authenticating as a Service Principal using a Client Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#client_secret AzureadProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The path to a file containing the application password to use when authenticating as a Service Principal using a Client Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#client_secret_file_path AzureadProvider#client_secret_file_path}
  */
  readonly clientSecretFilePath?: string;
  /**
  * Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#disable_terraform_partner_id AzureadProvider#disable_terraform_partner_id}
  */
  readonly disableTerraformPartnerId?: boolean | cdktf.IResolvable;
  /**
  * The cloud environment which should be used. Possible values are: `global` (also `public`), `usgovernmentl4` (also `usgovernment`), `usgovernmentl5` (also `dod`), and `china`. Defaults to `global`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#environment AzureadProvider#environment}
  */
  readonly environment?: string;
  /**
  * The Hostname which should be used for the Azure Metadata Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#metadata_host AzureadProvider#metadata_host}
  */
  readonly metadataHost?: string;
  /**
  * The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#msi_endpoint AzureadProvider#msi_endpoint}
  */
  readonly msiEndpoint?: string;
  /**
  * The bearer token for the request to the OIDC provider. For use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#oidc_request_token AzureadProvider#oidc_request_token}
  */
  readonly oidcRequestToken?: string;
  /**
  * The URL for the OIDC provider from which to request an ID token. For use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#oidc_request_url AzureadProvider#oidc_request_url}
  */
  readonly oidcRequestUrl?: string;
  /**
  * The ID token for use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#oidc_token AzureadProvider#oidc_token}
  */
  readonly oidcToken?: string;
  /**
  * The path to a file containing an ID token for use when authenticating as a Service Principal using OpenID Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#oidc_token_file_path AzureadProvider#oidc_token_file_path}
  */
  readonly oidcTokenFilePath?: string;
  /**
  * A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#partner_id AzureadProvider#partner_id}
  */
  readonly partnerId?: string;
  /**
  * The Tenant ID which should be used. Works with all authentication methods except Managed Identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#tenant_id AzureadProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Allow Azure CLI to be used for Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#use_cli AzureadProvider#use_cli}
  */
  readonly useCli?: boolean | cdktf.IResolvable;
  /**
  * Allow Managed Identity to be used for Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#use_msi AzureadProvider#use_msi}
  */
  readonly useMsi?: boolean | cdktf.IResolvable;
  /**
  * Allow OpenID Connect to be used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#use_oidc AzureadProvider#use_oidc}
  */
  readonly useOidc?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#alias AzureadProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs azuread}
*/
export class AzureadProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureadProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureadProvider to import
  * @param importFromId The id of the existing AzureadProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureadProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuread", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azuread/2.47.0/docs azuread} Resource
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
        providerVersion: '2.47.0',
        providerVersionConstraint: '~> 2.0'
      },
      terraformProviderSource: 'hashicorp/azuread'
    });
    this._clientCertificate = config.clientCertificate;
    this._clientCertificatePassword = config.clientCertificatePassword;
    this._clientCertificatePath = config.clientCertificatePath;
    this._clientId = config.clientId;
    this._clientIdFilePath = config.clientIdFilePath;
    this._clientSecret = config.clientSecret;
    this._clientSecretFilePath = config.clientSecretFilePath;
    this._disableTerraformPartnerId = config.disableTerraformPartnerId;
    this._environment = config.environment;
    this._metadataHost = config.metadataHost;
    this._msiEndpoint = config.msiEndpoint;
    this._oidcRequestToken = config.oidcRequestToken;
    this._oidcRequestUrl = config.oidcRequestUrl;
    this._oidcToken = config.oidcToken;
    this._oidcTokenFilePath = config.oidcTokenFilePath;
    this._partnerId = config.partnerId;
    this._tenantId = config.tenantId;
    this._useCli = config.useCli;
    this._useMsi = config.useMsi;
    this._useOidc = config.useOidc;
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

  // client_id_file_path - computed: false, optional: true, required: false
  private _clientIdFilePath?: string; 
  public get clientIdFilePath() {
    return this._clientIdFilePath;
  }
  public set clientIdFilePath(value: string | undefined) {
    this._clientIdFilePath = value;
  }
  public resetClientIdFilePath() {
    this._clientIdFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdFilePathInput() {
    return this._clientIdFilePath;
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

  // client_secret_file_path - computed: false, optional: true, required: false
  private _clientSecretFilePath?: string; 
  public get clientSecretFilePath() {
    return this._clientSecretFilePath;
  }
  public set clientSecretFilePath(value: string | undefined) {
    this._clientSecretFilePath = value;
  }
  public resetClientSecretFilePath() {
    this._clientSecretFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretFilePathInput() {
    return this._clientSecretFilePath;
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

  // metadata_host - computed: false, optional: true, required: false
  private _metadataHost?: string; 
  public get metadataHost() {
    return this._metadataHost;
  }
  public set metadataHost(value: string | undefined) {
    this._metadataHost = value;
  }
  public resetMetadataHost() {
    this._metadataHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataHostInput() {
    return this._metadataHost;
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

  // oidc_request_token - computed: false, optional: true, required: false
  private _oidcRequestToken?: string; 
  public get oidcRequestToken() {
    return this._oidcRequestToken;
  }
  public set oidcRequestToken(value: string | undefined) {
    this._oidcRequestToken = value;
  }
  public resetOidcRequestToken() {
    this._oidcRequestToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcRequestTokenInput() {
    return this._oidcRequestToken;
  }

  // oidc_request_url - computed: false, optional: true, required: false
  private _oidcRequestUrl?: string; 
  public get oidcRequestUrl() {
    return this._oidcRequestUrl;
  }
  public set oidcRequestUrl(value: string | undefined) {
    this._oidcRequestUrl = value;
  }
  public resetOidcRequestUrl() {
    this._oidcRequestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcRequestUrlInput() {
    return this._oidcRequestUrl;
  }

  // oidc_token - computed: false, optional: true, required: false
  private _oidcToken?: string; 
  public get oidcToken() {
    return this._oidcToken;
  }
  public set oidcToken(value: string | undefined) {
    this._oidcToken = value;
  }
  public resetOidcToken() {
    this._oidcToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenInput() {
    return this._oidcToken;
  }

  // oidc_token_file_path - computed: false, optional: true, required: false
  private _oidcTokenFilePath?: string; 
  public get oidcTokenFilePath() {
    return this._oidcTokenFilePath;
  }
  public set oidcTokenFilePath(value: string | undefined) {
    this._oidcTokenFilePath = value;
  }
  public resetOidcTokenFilePath() {
    this._oidcTokenFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenFilePathInput() {
    return this._oidcTokenFilePath;
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

  // use_oidc - computed: false, optional: true, required: false
  private _useOidc?: boolean | cdktf.IResolvable; 
  public get useOidc() {
    return this._useOidc;
  }
  public set useOidc(value: boolean | cdktf.IResolvable | undefined) {
    this._useOidc = value;
  }
  public resetUseOidc() {
    this._useOidc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOidcInput() {
    return this._useOidc;
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
      client_id_file_path: cdktf.stringToTerraform(this._clientIdFilePath),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_secret_file_path: cdktf.stringToTerraform(this._clientSecretFilePath),
      disable_terraform_partner_id: cdktf.booleanToTerraform(this._disableTerraformPartnerId),
      environment: cdktf.stringToTerraform(this._environment),
      metadata_host: cdktf.stringToTerraform(this._metadataHost),
      msi_endpoint: cdktf.stringToTerraform(this._msiEndpoint),
      oidc_request_token: cdktf.stringToTerraform(this._oidcRequestToken),
      oidc_request_url: cdktf.stringToTerraform(this._oidcRequestUrl),
      oidc_token: cdktf.stringToTerraform(this._oidcToken),
      oidc_token_file_path: cdktf.stringToTerraform(this._oidcTokenFilePath),
      partner_id: cdktf.stringToTerraform(this._partnerId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_cli: cdktf.booleanToTerraform(this._useCli),
      use_msi: cdktf.booleanToTerraform(this._useMsi),
      use_oidc: cdktf.booleanToTerraform(this._useOidc),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
