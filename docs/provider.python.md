# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-azuread.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureadProvider <a name="AzureadProvider" id="@cdktf/provider-azuread.provider.AzureadProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs azuread}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import provider

provider.AzureadProvider(
  scope: Construct,
  id: str,
  alias: str = None,
  client_certificate: str = None,
  client_certificate_password: str = None,
  client_certificate_path: str = None,
  client_id: str = None,
  client_id_file_path: str = None,
  client_secret: str = None,
  client_secret_file_path: str = None,
  disable_terraform_partner_id: typing.Union[bool, IResolvable] = None,
  environment: str = None,
  metadata_host: str = None,
  msi_endpoint: str = None,
  oidc_request_token: str = None,
  oidc_request_url: str = None,
  oidc_token: str = None,
  oidc_token_file_path: str = None,
  partner_id: str = None,
  tenant_id: str = None,
  use_aks_workload_identity: typing.Union[bool, IResolvable] = None,
  use_cli: typing.Union[bool, IResolvable] = None,
  use_msi: typing.Union[bool, IResolvable] = None,
  use_oidc: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientCertificate">client_certificate</a></code> | <code>str</code> | Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientCertificatePassword">client_certificate_password</a></code> | <code>str</code> | The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientCertificatePath">client_certificate_path</a></code> | <code>str</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | The Client ID which should be used for service principal authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientIdFilePath">client_id_file_path</a></code> | <code>str</code> | The path to a file containing the Client ID which should be used for service principal authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | The application password to use when authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientSecretFilePath">client_secret_file_path</a></code> | <code>str</code> | The path to a file containing the application password to use when authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.disableTerraformPartnerId">disable_terraform_partner_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The cloud environment which should be used. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.metadataHost">metadata_host</a></code> | <code>str</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.msiEndpoint">msi_endpoint</a></code> | <code>str</code> | The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.oidcRequestToken">oidc_request_token</a></code> | <code>str</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.oidcRequestUrl">oidc_request_url</a></code> | <code>str</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.oidcToken">oidc_token</a></code> | <code>str</code> | The ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.oidcTokenFilePath">oidc_token_file_path</a></code> | <code>str</code> | The path to a file containing an ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.partnerId">partner_id</a></code> | <code>str</code> | A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | The Tenant ID which should be used. Works with all authentication methods except Managed Identity. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.useAksWorkloadIdentity">use_aks_workload_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow Azure AKS Workload Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.useCli">use_cli</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow Azure CLI to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.useMsi">use_msi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow Managed Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.useOidc">use_oidc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow OpenID Connect to be used for authentication. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#alias AzureadProvider#alias}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientCertificate"></a>

- *Type:* str

Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#client_certificate AzureadProvider#client_certificate}

---

##### `client_certificate_password`<sup>Optional</sup> <a name="client_certificate_password" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientCertificatePassword"></a>

- *Type:* str

The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#client_certificate_password AzureadProvider#client_certificate_password}

---

##### `client_certificate_path`<sup>Optional</sup> <a name="client_certificate_path" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientCertificatePath"></a>

- *Type:* str

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#client_certificate_path AzureadProvider#client_certificate_path}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientId"></a>

- *Type:* str

The Client ID which should be used for service principal authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#client_id AzureadProvider#client_id}

---

##### `client_id_file_path`<sup>Optional</sup> <a name="client_id_file_path" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientIdFilePath"></a>

- *Type:* str

The path to a file containing the Client ID which should be used for service principal authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#client_id_file_path AzureadProvider#client_id_file_path}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientSecret"></a>

- *Type:* str

The application password to use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#client_secret AzureadProvider#client_secret}

---

##### `client_secret_file_path`<sup>Optional</sup> <a name="client_secret_file_path" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.clientSecretFilePath"></a>

- *Type:* str

The path to a file containing the application password to use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#client_secret_file_path AzureadProvider#client_secret_file_path}

---

##### `disable_terraform_partner_id`<sup>Optional</sup> <a name="disable_terraform_partner_id" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.disableTerraformPartnerId"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#disable_terraform_partner_id AzureadProvider#disable_terraform_partner_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.environment"></a>

- *Type:* str

The cloud environment which should be used.

Possible values are: `global` (also `public`), `usgovernmentl4` (also `usgovernment`), `usgovernmentl5` (also `dod`), and `china`. Defaults to `global`. Not used and should not be specified when `metadata_host` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#environment AzureadProvider#environment}

---

##### `metadata_host`<sup>Optional</sup> <a name="metadata_host" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.metadataHost"></a>

- *Type:* str

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#metadata_host AzureadProvider#metadata_host}

---

##### `msi_endpoint`<sup>Optional</sup> <a name="msi_endpoint" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.msiEndpoint"></a>

- *Type:* str

The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#msi_endpoint AzureadProvider#msi_endpoint}

---

##### `oidc_request_token`<sup>Optional</sup> <a name="oidc_request_token" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.oidcRequestToken"></a>

- *Type:* str

The bearer token for the request to the OIDC provider.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#oidc_request_token AzureadProvider#oidc_request_token}

---

##### `oidc_request_url`<sup>Optional</sup> <a name="oidc_request_url" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.oidcRequestUrl"></a>

- *Type:* str

The URL for the OIDC provider from which to request an ID token.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#oidc_request_url AzureadProvider#oidc_request_url}

---

##### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.oidcToken"></a>

- *Type:* str

The ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#oidc_token AzureadProvider#oidc_token}

---

##### `oidc_token_file_path`<sup>Optional</sup> <a name="oidc_token_file_path" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.oidcTokenFilePath"></a>

- *Type:* str

The path to a file containing an ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#oidc_token_file_path AzureadProvider#oidc_token_file_path}

---

##### `partner_id`<sup>Optional</sup> <a name="partner_id" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.partnerId"></a>

- *Type:* str

A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#partner_id AzureadProvider#partner_id}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.tenantId"></a>

- *Type:* str

The Tenant ID which should be used. Works with all authentication methods except Managed Identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#tenant_id AzureadProvider#tenant_id}

---

##### `use_aks_workload_identity`<sup>Optional</sup> <a name="use_aks_workload_identity" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.useAksWorkloadIdentity"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow Azure AKS Workload Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#use_aks_workload_identity AzureadProvider#use_aks_workload_identity}

---

##### `use_cli`<sup>Optional</sup> <a name="use_cli" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.useCli"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow Azure CLI to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#use_cli AzureadProvider#use_cli}

---

##### `use_msi`<sup>Optional</sup> <a name="use_msi" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.useMsi"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow Managed Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#use_msi AzureadProvider#use_msi}

---

##### `use_oidc`<sup>Optional</sup> <a name="use_oidc" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.useOidc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow OpenID Connect to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#use_oidc AzureadProvider#use_oidc}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificate">reset_client_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePassword">reset_client_certificate_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePath">reset_client_certificate_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientIdFilePath">reset_client_id_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecretFilePath">reset_client_secret_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetDisableTerraformPartnerId">reset_disable_terraform_partner_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetMetadataHost">reset_metadata_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetMsiEndpoint">reset_msi_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestToken">reset_oidc_request_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestUrl">reset_oidc_request_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOidcToken">reset_oidc_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOidcTokenFilePath">reset_oidc_token_file_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetPartnerId">reset_partner_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseAksWorkloadIdentity">reset_use_aks_workload_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseCli">reset_use_cli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseMsi">reset_use_msi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseOidc">reset_use_oidc</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azuread.provider.AzureadProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azuread.provider.AzureadProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.provider.AzureadProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.provider.AzureadProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azuread.provider.AzureadProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azuread.provider.AzureadProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azuread.provider.AzureadProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azuread.provider.AzureadProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azuread.provider.AzureadProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-azuread.provider.AzureadProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_client_certificate` <a name="reset_client_certificate" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificate"></a>

```python
def reset_client_certificate() -> None
```

##### `reset_client_certificate_password` <a name="reset_client_certificate_password" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePassword"></a>

```python
def reset_client_certificate_password() -> None
```

##### `reset_client_certificate_path` <a name="reset_client_certificate_path" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePath"></a>

```python
def reset_client_certificate_path() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_id_file_path` <a name="reset_client_id_file_path" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientIdFilePath"></a>

```python
def reset_client_id_file_path() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_client_secret_file_path` <a name="reset_client_secret_file_path" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecretFilePath"></a>

```python
def reset_client_secret_file_path() -> None
```

##### `reset_disable_terraform_partner_id` <a name="reset_disable_terraform_partner_id" id="@cdktf/provider-azuread.provider.AzureadProvider.resetDisableTerraformPartnerId"></a>

```python
def reset_disable_terraform_partner_id() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktf/provider-azuread.provider.AzureadProvider.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_metadata_host` <a name="reset_metadata_host" id="@cdktf/provider-azuread.provider.AzureadProvider.resetMetadataHost"></a>

```python
def reset_metadata_host() -> None
```

##### `reset_msi_endpoint` <a name="reset_msi_endpoint" id="@cdktf/provider-azuread.provider.AzureadProvider.resetMsiEndpoint"></a>

```python
def reset_msi_endpoint() -> None
```

##### `reset_oidc_request_token` <a name="reset_oidc_request_token" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestToken"></a>

```python
def reset_oidc_request_token() -> None
```

##### `reset_oidc_request_url` <a name="reset_oidc_request_url" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestUrl"></a>

```python
def reset_oidc_request_url() -> None
```

##### `reset_oidc_token` <a name="reset_oidc_token" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcToken"></a>

```python
def reset_oidc_token() -> None
```

##### `reset_oidc_token_file_path` <a name="reset_oidc_token_file_path" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcTokenFilePath"></a>

```python
def reset_oidc_token_file_path() -> None
```

##### `reset_partner_id` <a name="reset_partner_id" id="@cdktf/provider-azuread.provider.AzureadProvider.resetPartnerId"></a>

```python
def reset_partner_id() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azuread.provider.AzureadProvider.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_use_aks_workload_identity` <a name="reset_use_aks_workload_identity" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseAksWorkloadIdentity"></a>

```python
def reset_use_aks_workload_identity() -> None
```

##### `reset_use_cli` <a name="reset_use_cli" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseCli"></a>

```python
def reset_use_cli() -> None
```

##### `reset_use_msi` <a name="reset_use_msi" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseMsi"></a>

```python
def reset_use_msi() -> None
```

##### `reset_use_oidc` <a name="reset_use_oidc" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseOidc"></a>

```python
def reset_use_oidc() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AzureadProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azuread.provider.AzureadProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_azuread import provider

provider.AzureadProvider.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.provider.AzureadProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azuread import provider

provider.AzureadProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_azuread import provider

provider.AzureadProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azuread import provider

provider.AzureadProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AzureadProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AzureadProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AzureadProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AzureadProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificateInput">client_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePasswordInput">client_certificate_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePathInput">client_certificate_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdFilePathInput">client_id_file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretFilePathInput">client_secret_file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerIdInput">disable_terraform_partner_id_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHostInput">metadata_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpointInput">msi_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestTokenInput">oidc_request_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrlInput">oidc_request_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePathInput">oidc_token_file_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenInput">oidc_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.partnerIdInput">partner_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useAksWorkloadIdentityInput">use_aks_workload_identity_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useCliInput">use_cli_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useMsiInput">use_msi_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useOidcInput">use_oidc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificate">client_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePassword">client_certificate_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePath">client_certificate_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdFilePath">client_id_file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretFilePath">client_secret_file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerId">disable_terraform_partner_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHost">metadata_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpoint">msi_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestToken">oidc_request_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrl">oidc_request_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcToken">oidc_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePath">oidc_token_file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.partnerId">partner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useAksWorkloadIdentity">use_aks_workload_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useCli">use_cli</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useMsi">use_msi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useOidc">use_oidc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.provider.AzureadProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azuread.provider.AzureadProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.provider.AzureadProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azuread.provider.AzureadProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-azuread.provider.AzureadProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azuread.provider.AzureadProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azuread.provider.AzureadProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-azuread.provider.AzureadProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azuread.provider.AzureadProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `client_certificate_input`<sup>Optional</sup> <a name="client_certificate_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificateInput"></a>

```python
client_certificate_input: str
```

- *Type:* str

---

##### `client_certificate_password_input`<sup>Optional</sup> <a name="client_certificate_password_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePasswordInput"></a>

```python
client_certificate_password_input: str
```

- *Type:* str

---

##### `client_certificate_path_input`<sup>Optional</sup> <a name="client_certificate_path_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePathInput"></a>

```python
client_certificate_path_input: str
```

- *Type:* str

---

##### `client_id_file_path_input`<sup>Optional</sup> <a name="client_id_file_path_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdFilePathInput"></a>

```python
client_id_file_path_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_file_path_input`<sup>Optional</sup> <a name="client_secret_file_path_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretFilePathInput"></a>

```python
client_secret_file_path_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `disable_terraform_partner_id_input`<sup>Optional</sup> <a name="disable_terraform_partner_id_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerIdInput"></a>

```python
disable_terraform_partner_id_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `metadata_host_input`<sup>Optional</sup> <a name="metadata_host_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHostInput"></a>

```python
metadata_host_input: str
```

- *Type:* str

---

##### `msi_endpoint_input`<sup>Optional</sup> <a name="msi_endpoint_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpointInput"></a>

```python
msi_endpoint_input: str
```

- *Type:* str

---

##### `oidc_request_token_input`<sup>Optional</sup> <a name="oidc_request_token_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestTokenInput"></a>

```python
oidc_request_token_input: str
```

- *Type:* str

---

##### `oidc_request_url_input`<sup>Optional</sup> <a name="oidc_request_url_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrlInput"></a>

```python
oidc_request_url_input: str
```

- *Type:* str

---

##### `oidc_token_file_path_input`<sup>Optional</sup> <a name="oidc_token_file_path_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePathInput"></a>

```python
oidc_token_file_path_input: str
```

- *Type:* str

---

##### `oidc_token_input`<sup>Optional</sup> <a name="oidc_token_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenInput"></a>

```python
oidc_token_input: str
```

- *Type:* str

---

##### `partner_id_input`<sup>Optional</sup> <a name="partner_id_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.partnerIdInput"></a>

```python
partner_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `use_aks_workload_identity_input`<sup>Optional</sup> <a name="use_aks_workload_identity_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useAksWorkloadIdentityInput"></a>

```python
use_aks_workload_identity_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_cli_input`<sup>Optional</sup> <a name="use_cli_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useCliInput"></a>

```python
use_cli_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_msi_input`<sup>Optional</sup> <a name="use_msi_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useMsiInput"></a>

```python
use_msi_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_oidc_input`<sup>Optional</sup> <a name="use_oidc_input" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useOidcInput"></a>

```python
use_oidc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

---

##### `client_certificate_password`<sup>Optional</sup> <a name="client_certificate_password" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePassword"></a>

```python
client_certificate_password: str
```

- *Type:* str

---

##### `client_certificate_path`<sup>Optional</sup> <a name="client_certificate_path" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePath"></a>

```python
client_certificate_path: str
```

- *Type:* str

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_id_file_path`<sup>Optional</sup> <a name="client_id_file_path" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdFilePath"></a>

```python
client_id_file_path: str
```

- *Type:* str

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `client_secret_file_path`<sup>Optional</sup> <a name="client_secret_file_path" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretFilePath"></a>

```python
client_secret_file_path: str
```

- *Type:* str

---

##### `disable_terraform_partner_id`<sup>Optional</sup> <a name="disable_terraform_partner_id" id="@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerId"></a>

```python
disable_terraform_partner_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azuread.provider.AzureadProvider.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `metadata_host`<sup>Optional</sup> <a name="metadata_host" id="@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHost"></a>

```python
metadata_host: str
```

- *Type:* str

---

##### `msi_endpoint`<sup>Optional</sup> <a name="msi_endpoint" id="@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpoint"></a>

```python
msi_endpoint: str
```

- *Type:* str

---

##### `oidc_request_token`<sup>Optional</sup> <a name="oidc_request_token" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestToken"></a>

```python
oidc_request_token: str
```

- *Type:* str

---

##### `oidc_request_url`<sup>Optional</sup> <a name="oidc_request_url" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrl"></a>

```python
oidc_request_url: str
```

- *Type:* str

---

##### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcToken"></a>

```python
oidc_token: str
```

- *Type:* str

---

##### `oidc_token_file_path`<sup>Optional</sup> <a name="oidc_token_file_path" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePath"></a>

```python
oidc_token_file_path: str
```

- *Type:* str

---

##### `partner_id`<sup>Optional</sup> <a name="partner_id" id="@cdktf/provider-azuread.provider.AzureadProvider.property.partnerId"></a>

```python
partner_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azuread.provider.AzureadProvider.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `use_aks_workload_identity`<sup>Optional</sup> <a name="use_aks_workload_identity" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useAksWorkloadIdentity"></a>

```python
use_aks_workload_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_cli`<sup>Optional</sup> <a name="use_cli" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useCli"></a>

```python
use_cli: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_msi`<sup>Optional</sup> <a name="use_msi" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useMsi"></a>

```python
use_msi: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use_oidc`<sup>Optional</sup> <a name="use_oidc" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useOidc"></a>

```python
use_oidc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.provider.AzureadProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AzureadProviderConfig <a name="AzureadProviderConfig" id="@cdktf/provider-azuread.provider.AzureadProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azuread import provider

provider.AzureadProviderConfig(
  alias: str = None,
  client_certificate: str = None,
  client_certificate_password: str = None,
  client_certificate_path: str = None,
  client_id: str = None,
  client_id_file_path: str = None,
  client_secret: str = None,
  client_secret_file_path: str = None,
  disable_terraform_partner_id: typing.Union[bool, IResolvable] = None,
  environment: str = None,
  metadata_host: str = None,
  msi_endpoint: str = None,
  oidc_request_token: str = None,
  oidc_request_url: str = None,
  oidc_token: str = None,
  oidc_token_file_path: str = None,
  partner_id: str = None,
  tenant_id: str = None,
  use_aks_workload_identity: typing.Union[bool, IResolvable] = None,
  use_cli: typing.Union[bool, IResolvable] = None,
  use_msi: typing.Union[bool, IResolvable] = None,
  use_oidc: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificate">client_certificate</a></code> | <code>str</code> | Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePassword">client_certificate_password</a></code> | <code>str</code> | The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePath">client_certificate_path</a></code> | <code>str</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientId">client_id</a></code> | <code>str</code> | The Client ID which should be used for service principal authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientIdFilePath">client_id_file_path</a></code> | <code>str</code> | The path to a file containing the Client ID which should be used for service principal authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | The application password to use when authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecretFilePath">client_secret_file_path</a></code> | <code>str</code> | The path to a file containing the application password to use when authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.disableTerraformPartnerId">disable_terraform_partner_id</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.environment">environment</a></code> | <code>str</code> | The cloud environment which should be used. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.metadataHost">metadata_host</a></code> | <code>str</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.msiEndpoint">msi_endpoint</a></code> | <code>str</code> | The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestToken">oidc_request_token</a></code> | <code>str</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestUrl">oidc_request_url</a></code> | <code>str</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcToken">oidc_token</a></code> | <code>str</code> | The ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcTokenFilePath">oidc_token_file_path</a></code> | <code>str</code> | The path to a file containing an ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.partnerId">partner_id</a></code> | <code>str</code> | A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | The Tenant ID which should be used. Works with all authentication methods except Managed Identity. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useAksWorkloadIdentity">use_aks_workload_identity</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow Azure AKS Workload Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useCli">use_cli</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow Azure CLI to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useMsi">use_msi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow Managed Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useOidc">use_oidc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allow OpenID Connect to be used for authentication. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#alias AzureadProvider#alias}

---

##### `client_certificate`<sup>Optional</sup> <a name="client_certificate" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificate"></a>

```python
client_certificate: str
```

- *Type:* str

Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#client_certificate AzureadProvider#client_certificate}

---

##### `client_certificate_password`<sup>Optional</sup> <a name="client_certificate_password" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePassword"></a>

```python
client_certificate_password: str
```

- *Type:* str

The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#client_certificate_password AzureadProvider#client_certificate_password}

---

##### `client_certificate_path`<sup>Optional</sup> <a name="client_certificate_path" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePath"></a>

```python
client_certificate_path: str
```

- *Type:* str

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#client_certificate_path AzureadProvider#client_certificate_path}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

The Client ID which should be used for service principal authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#client_id AzureadProvider#client_id}

---

##### `client_id_file_path`<sup>Optional</sup> <a name="client_id_file_path" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientIdFilePath"></a>

```python
client_id_file_path: str
```

- *Type:* str

The path to a file containing the Client ID which should be used for service principal authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#client_id_file_path AzureadProvider#client_id_file_path}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The application password to use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#client_secret AzureadProvider#client_secret}

---

##### `client_secret_file_path`<sup>Optional</sup> <a name="client_secret_file_path" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecretFilePath"></a>

```python
client_secret_file_path: str
```

- *Type:* str

The path to a file containing the application password to use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#client_secret_file_path AzureadProvider#client_secret_file_path}

---

##### `disable_terraform_partner_id`<sup>Optional</sup> <a name="disable_terraform_partner_id" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.disableTerraformPartnerId"></a>

```python
disable_terraform_partner_id: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#disable_terraform_partner_id AzureadProvider#disable_terraform_partner_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The cloud environment which should be used.

Possible values are: `global` (also `public`), `usgovernmentl4` (also `usgovernment`), `usgovernmentl5` (also `dod`), and `china`. Defaults to `global`. Not used and should not be specified when `metadata_host` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#environment AzureadProvider#environment}

---

##### `metadata_host`<sup>Optional</sup> <a name="metadata_host" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.metadataHost"></a>

```python
metadata_host: str
```

- *Type:* str

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#metadata_host AzureadProvider#metadata_host}

---

##### `msi_endpoint`<sup>Optional</sup> <a name="msi_endpoint" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.msiEndpoint"></a>

```python
msi_endpoint: str
```

- *Type:* str

The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#msi_endpoint AzureadProvider#msi_endpoint}

---

##### `oidc_request_token`<sup>Optional</sup> <a name="oidc_request_token" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestToken"></a>

```python
oidc_request_token: str
```

- *Type:* str

The bearer token for the request to the OIDC provider.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#oidc_request_token AzureadProvider#oidc_request_token}

---

##### `oidc_request_url`<sup>Optional</sup> <a name="oidc_request_url" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestUrl"></a>

```python
oidc_request_url: str
```

- *Type:* str

The URL for the OIDC provider from which to request an ID token.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#oidc_request_url AzureadProvider#oidc_request_url}

---

##### `oidc_token`<sup>Optional</sup> <a name="oidc_token" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcToken"></a>

```python
oidc_token: str
```

- *Type:* str

The ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#oidc_token AzureadProvider#oidc_token}

---

##### `oidc_token_file_path`<sup>Optional</sup> <a name="oidc_token_file_path" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcTokenFilePath"></a>

```python
oidc_token_file_path: str
```

- *Type:* str

The path to a file containing an ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#oidc_token_file_path AzureadProvider#oidc_token_file_path}

---

##### `partner_id`<sup>Optional</sup> <a name="partner_id" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.partnerId"></a>

```python
partner_id: str
```

- *Type:* str

A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#partner_id AzureadProvider#partner_id}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

The Tenant ID which should be used. Works with all authentication methods except Managed Identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#tenant_id AzureadProvider#tenant_id}

---

##### `use_aks_workload_identity`<sup>Optional</sup> <a name="use_aks_workload_identity" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useAksWorkloadIdentity"></a>

```python
use_aks_workload_identity: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow Azure AKS Workload Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#use_aks_workload_identity AzureadProvider#use_aks_workload_identity}

---

##### `use_cli`<sup>Optional</sup> <a name="use_cli" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useCli"></a>

```python
use_cli: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow Azure CLI to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#use_cli AzureadProvider#use_cli}

---

##### `use_msi`<sup>Optional</sup> <a name="use_msi" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useMsi"></a>

```python
use_msi: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow Managed Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#use_msi AzureadProvider#use_msi}

---

##### `use_oidc`<sup>Optional</sup> <a name="use_oidc" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useOidc"></a>

```python
use_oidc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allow OpenID Connect to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.53.1/docs#use_oidc AzureadProvider#use_oidc}

---



