# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-azuread.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureadProvider <a name="AzureadProvider" id="@cdktf/provider-azuread.provider.AzureadProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs azuread}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v14/provider"

provider.NewAzureadProvider(scope Construct, id *string, config AzureadProviderConfig) AzureadProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig">AzureadProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azuread.provider.AzureadProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig">AzureadProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetAdoPipelineServiceConnectionId">ResetAdoPipelineServiceConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificate">ResetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePassword">ResetClientCertificatePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePath">ResetClientCertificatePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientIdFilePath">ResetClientIdFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecretFilePath">ResetClientSecretFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetDisableTerraformPartnerId">ResetDisableTerraformPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetMetadataHost">ResetMetadataHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetMsiEndpoint">ResetMsiEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestToken">ResetOidcRequestToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestUrl">ResetOidcRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOidcToken">ResetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetOidcTokenFilePath">ResetOidcTokenFilePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetPartnerId">ResetPartnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseAksWorkloadIdentity">ResetUseAksWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseCli">ResetUseCli</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseMsi">ResetUseMsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.resetUseOidc">ResetUseOidc</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.provider.AzureadProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.provider.AzureadProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.provider.AzureadProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.provider.AzureadProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.provider.AzureadProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.provider.AzureadProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.provider.AzureadProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.provider.AzureadProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.provider.AzureadProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAdoPipelineServiceConnectionId` <a name="ResetAdoPipelineServiceConnectionId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetAdoPipelineServiceConnectionId"></a>

```go
func ResetAdoPipelineServiceConnectionId()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-azuread.provider.AzureadProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetClientCertificate` <a name="ResetClientCertificate" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificate"></a>

```go
func ResetClientCertificate()
```

##### `ResetClientCertificatePassword` <a name="ResetClientCertificatePassword" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePassword"></a>

```go
func ResetClientCertificatePassword()
```

##### `ResetClientCertificatePath` <a name="ResetClientCertificatePath" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientCertificatePath"></a>

```go
func ResetClientCertificatePath()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientIdFilePath` <a name="ResetClientIdFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientIdFilePath"></a>

```go
func ResetClientIdFilePath()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetClientSecretFilePath` <a name="ResetClientSecretFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.resetClientSecretFilePath"></a>

```go
func ResetClientSecretFilePath()
```

##### `ResetDisableTerraformPartnerId` <a name="ResetDisableTerraformPartnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetDisableTerraformPartnerId"></a>

```go
func ResetDisableTerraformPartnerId()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-azuread.provider.AzureadProvider.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetMetadataHost` <a name="ResetMetadataHost" id="@cdktf/provider-azuread.provider.AzureadProvider.resetMetadataHost"></a>

```go
func ResetMetadataHost()
```

##### `ResetMsiEndpoint` <a name="ResetMsiEndpoint" id="@cdktf/provider-azuread.provider.AzureadProvider.resetMsiEndpoint"></a>

```go
func ResetMsiEndpoint()
```

##### `ResetOidcRequestToken` <a name="ResetOidcRequestToken" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestToken"></a>

```go
func ResetOidcRequestToken()
```

##### `ResetOidcRequestUrl` <a name="ResetOidcRequestUrl" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcRequestUrl"></a>

```go
func ResetOidcRequestUrl()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcToken"></a>

```go
func ResetOidcToken()
```

##### `ResetOidcTokenFilePath` <a name="ResetOidcTokenFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.resetOidcTokenFilePath"></a>

```go
func ResetOidcTokenFilePath()
```

##### `ResetPartnerId` <a name="ResetPartnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetPartnerId"></a>

```go
func ResetPartnerId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azuread.provider.AzureadProvider.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetUseAksWorkloadIdentity` <a name="ResetUseAksWorkloadIdentity" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseAksWorkloadIdentity"></a>

```go
func ResetUseAksWorkloadIdentity()
```

##### `ResetUseCli` <a name="ResetUseCli" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseCli"></a>

```go
func ResetUseCli()
```

##### `ResetUseMsi` <a name="ResetUseMsi" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseMsi"></a>

```go
func ResetUseMsi()
```

##### `ResetUseOidc` <a name="ResetUseOidc" id="@cdktf/provider-azuread.provider.AzureadProvider.resetUseOidc"></a>

```go
func ResetUseOidc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AzureadProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.provider.AzureadProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v14/provider"

provider.AzureadProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v14/provider"

provider.AzureadProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v14/provider"

provider.AzureadProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.provider.AzureadProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v14/provider"

provider.AzureadProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AzureadProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AzureadProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AzureadProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.provider.AzureadProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AzureadProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.adoPipelineServiceConnectionIdInput">AdoPipelineServiceConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificateInput">ClientCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePasswordInput">ClientCertificatePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePathInput">ClientCertificatePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdFilePathInput">ClientIdFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretFilePathInput">ClientSecretFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerIdInput">DisableTerraformPartnerIdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.environmentInput">EnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHostInput">MetadataHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpointInput">MsiEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestTokenInput">OidcRequestTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrlInput">OidcRequestUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePathInput">OidcTokenFilePathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenInput">OidcTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.partnerIdInput">PartnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useAksWorkloadIdentityInput">UseAksWorkloadIdentityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useCliInput">UseCliInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useMsiInput">UseMsiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useOidcInput">UseOidcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.adoPipelineServiceConnectionId">AdoPipelineServiceConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdFilePath">ClientIdFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretFilePath">ClientSecretFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerId">DisableTerraformPartnerId</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.environment">Environment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHost">MetadataHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpoint">MsiEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestToken">OidcRequestToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrl">OidcRequestUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcToken">OidcToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePath">OidcTokenFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.partnerId">PartnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useAksWorkloadIdentity">UseAksWorkloadIdentity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useCli">UseCli</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useMsi">UseMsi</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.useOidc">UseOidc</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.provider.AzureadProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.provider.AzureadProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.provider.AzureadProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-azuread.provider.AzureadProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.provider.AzureadProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.provider.AzureadProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-azuread.provider.AzureadProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-azuread.provider.AzureadProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AdoPipelineServiceConnectionIdInput`<sup>Optional</sup> <a name="AdoPipelineServiceConnectionIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.adoPipelineServiceConnectionIdInput"></a>

```go
func AdoPipelineServiceConnectionIdInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `ClientCertificateInput`<sup>Optional</sup> <a name="ClientCertificateInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificateInput"></a>

```go
func ClientCertificateInput() *string
```

- *Type:* *string

---

##### `ClientCertificatePasswordInput`<sup>Optional</sup> <a name="ClientCertificatePasswordInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePasswordInput"></a>

```go
func ClientCertificatePasswordInput() *string
```

- *Type:* *string

---

##### `ClientCertificatePathInput`<sup>Optional</sup> <a name="ClientCertificatePathInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePathInput"></a>

```go
func ClientCertificatePathInput() *string
```

- *Type:* *string

---

##### `ClientIdFilePathInput`<sup>Optional</sup> <a name="ClientIdFilePathInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdFilePathInput"></a>

```go
func ClientIdFilePathInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretFilePathInput`<sup>Optional</sup> <a name="ClientSecretFilePathInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretFilePathInput"></a>

```go
func ClientSecretFilePathInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `DisableTerraformPartnerIdInput`<sup>Optional</sup> <a name="DisableTerraformPartnerIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerIdInput"></a>

```go
func DisableTerraformPartnerIdInput() interface{}
```

- *Type:* interface{}

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.environmentInput"></a>

```go
func EnvironmentInput() *string
```

- *Type:* *string

---

##### `MetadataHostInput`<sup>Optional</sup> <a name="MetadataHostInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHostInput"></a>

```go
func MetadataHostInput() *string
```

- *Type:* *string

---

##### `MsiEndpointInput`<sup>Optional</sup> <a name="MsiEndpointInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpointInput"></a>

```go
func MsiEndpointInput() *string
```

- *Type:* *string

---

##### `OidcRequestTokenInput`<sup>Optional</sup> <a name="OidcRequestTokenInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestTokenInput"></a>

```go
func OidcRequestTokenInput() *string
```

- *Type:* *string

---

##### `OidcRequestUrlInput`<sup>Optional</sup> <a name="OidcRequestUrlInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrlInput"></a>

```go
func OidcRequestUrlInput() *string
```

- *Type:* *string

---

##### `OidcTokenFilePathInput`<sup>Optional</sup> <a name="OidcTokenFilePathInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePathInput"></a>

```go
func OidcTokenFilePathInput() *string
```

- *Type:* *string

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenInput"></a>

```go
func OidcTokenInput() *string
```

- *Type:* *string

---

##### `PartnerIdInput`<sup>Optional</sup> <a name="PartnerIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.partnerIdInput"></a>

```go
func PartnerIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `UseAksWorkloadIdentityInput`<sup>Optional</sup> <a name="UseAksWorkloadIdentityInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useAksWorkloadIdentityInput"></a>

```go
func UseAksWorkloadIdentityInput() interface{}
```

- *Type:* interface{}

---

##### `UseCliInput`<sup>Optional</sup> <a name="UseCliInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useCliInput"></a>

```go
func UseCliInput() interface{}
```

- *Type:* interface{}

---

##### `UseMsiInput`<sup>Optional</sup> <a name="UseMsiInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useMsiInput"></a>

```go
func UseMsiInput() interface{}
```

- *Type:* interface{}

---

##### `UseOidcInput`<sup>Optional</sup> <a name="UseOidcInput" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useOidcInput"></a>

```go
func UseOidcInput() interface{}
```

- *Type:* interface{}

---

##### `AdoPipelineServiceConnectionId`<sup>Optional</sup> <a name="AdoPipelineServiceConnectionId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.adoPipelineServiceConnectionId"></a>

```go
func AdoPipelineServiceConnectionId() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificate"></a>

```go
func ClientCertificate() *string
```

- *Type:* *string

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePassword"></a>

```go
func ClientCertificatePassword() *string
```

- *Type:* *string

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientCertificatePath"></a>

```go
func ClientCertificatePath() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientIdFilePath`<sup>Optional</sup> <a name="ClientIdFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientIdFilePath"></a>

```go
func ClientIdFilePath() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ClientSecretFilePath`<sup>Optional</sup> <a name="ClientSecretFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.property.clientSecretFilePath"></a>

```go
func ClientSecretFilePath() *string
```

- *Type:* *string

---

##### `DisableTerraformPartnerId`<sup>Optional</sup> <a name="DisableTerraformPartnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.disableTerraformPartnerId"></a>

```go
func DisableTerraformPartnerId() interface{}
```

- *Type:* interface{}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-azuread.provider.AzureadProvider.property.environment"></a>

```go
func Environment() *string
```

- *Type:* *string

---

##### `MetadataHost`<sup>Optional</sup> <a name="MetadataHost" id="@cdktf/provider-azuread.provider.AzureadProvider.property.metadataHost"></a>

```go
func MetadataHost() *string
```

- *Type:* *string

---

##### `MsiEndpoint`<sup>Optional</sup> <a name="MsiEndpoint" id="@cdktf/provider-azuread.provider.AzureadProvider.property.msiEndpoint"></a>

```go
func MsiEndpoint() *string
```

- *Type:* *string

---

##### `OidcRequestToken`<sup>Optional</sup> <a name="OidcRequestToken" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestToken"></a>

```go
func OidcRequestToken() *string
```

- *Type:* *string

---

##### `OidcRequestUrl`<sup>Optional</sup> <a name="OidcRequestUrl" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcRequestUrl"></a>

```go
func OidcRequestUrl() *string
```

- *Type:* *string

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcToken"></a>

```go
func OidcToken() *string
```

- *Type:* *string

---

##### `OidcTokenFilePath`<sup>Optional</sup> <a name="OidcTokenFilePath" id="@cdktf/provider-azuread.provider.AzureadProvider.property.oidcTokenFilePath"></a>

```go
func OidcTokenFilePath() *string
```

- *Type:* *string

---

##### `PartnerId`<sup>Optional</sup> <a name="PartnerId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.partnerId"></a>

```go
func PartnerId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azuread.provider.AzureadProvider.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `UseAksWorkloadIdentity`<sup>Optional</sup> <a name="UseAksWorkloadIdentity" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useAksWorkloadIdentity"></a>

```go
func UseAksWorkloadIdentity() interface{}
```

- *Type:* interface{}

---

##### `UseCli`<sup>Optional</sup> <a name="UseCli" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useCli"></a>

```go
func UseCli() interface{}
```

- *Type:* interface{}

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useMsi"></a>

```go
func UseMsi() interface{}
```

- *Type:* interface{}

---

##### `UseOidc`<sup>Optional</sup> <a name="UseOidc" id="@cdktf/provider-azuread.provider.AzureadProvider.property.useOidc"></a>

```go
func UseOidc() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.provider.AzureadProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AzureadProviderConfig <a name="AzureadProviderConfig" id="@cdktf/provider-azuread.provider.AzureadProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v14/provider"

&provider.AzureadProviderConfig {
	AdoPipelineServiceConnectionId: *string,
	Alias: *string,
	ClientCertificate: *string,
	ClientCertificatePassword: *string,
	ClientCertificatePath: *string,
	ClientId: *string,
	ClientIdFilePath: *string,
	ClientSecret: *string,
	ClientSecretFilePath: *string,
	DisableTerraformPartnerId: interface{},
	Environment: *string,
	MetadataHost: *string,
	MsiEndpoint: *string,
	OidcRequestToken: *string,
	OidcRequestUrl: *string,
	OidcToken: *string,
	OidcTokenFilePath: *string,
	PartnerId: *string,
	TenantId: *string,
	UseAksWorkloadIdentity: interface{},
	UseCli: interface{},
	UseMsi: interface{},
	UseOidc: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.adoPipelineServiceConnectionId">AdoPipelineServiceConnectionId</a></code> | <code>*string</code> | The Azure DevOps Pipeline Service Connection ID. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificate">ClientCertificate</a></code> | <code>*string</code> | Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePassword">ClientCertificatePassword</a></code> | <code>*string</code> | The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePath">ClientCertificatePath</a></code> | <code>*string</code> | The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The Client ID which should be used for service principal authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientIdFilePath">ClientIdFilePath</a></code> | <code>*string</code> | The path to a file containing the Client ID which should be used for service principal authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The application password to use when authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecretFilePath">ClientSecretFilePath</a></code> | <code>*string</code> | The path to a file containing the application password to use when authenticating as a Service Principal using a Client Secret. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.disableTerraformPartnerId">DisableTerraformPartnerId</a></code> | <code>interface{}</code> | Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.environment">Environment</a></code> | <code>*string</code> | The cloud environment which should be used. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.metadataHost">MetadataHost</a></code> | <code>*string</code> | The Hostname which should be used for the Azure Metadata Service. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.msiEndpoint">MsiEndpoint</a></code> | <code>*string</code> | The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestToken">OidcRequestToken</a></code> | <code>*string</code> | The bearer token for the request to the OIDC provider. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestUrl">OidcRequestUrl</a></code> | <code>*string</code> | The URL for the OIDC provider from which to request an ID token. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcToken">OidcToken</a></code> | <code>*string</code> | The ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcTokenFilePath">OidcTokenFilePath</a></code> | <code>*string</code> | The path to a file containing an ID token for use when authenticating as a Service Principal using OpenID Connect. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.partnerId">PartnerId</a></code> | <code>*string</code> | A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.tenantId">TenantId</a></code> | <code>*string</code> | The Tenant ID which should be used. Works with all authentication methods except Managed Identity. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useAksWorkloadIdentity">UseAksWorkloadIdentity</a></code> | <code>interface{}</code> | Allow Azure AKS Workload Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useCli">UseCli</a></code> | <code>interface{}</code> | Allow Azure CLI to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useMsi">UseMsi</a></code> | <code>interface{}</code> | Allow Managed Identity to be used for Authentication. |
| <code><a href="#@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useOidc">UseOidc</a></code> | <code>interface{}</code> | Allow OpenID Connect to be used for authentication. |

---

##### `AdoPipelineServiceConnectionId`<sup>Optional</sup> <a name="AdoPipelineServiceConnectionId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.adoPipelineServiceConnectionId"></a>

```go
AdoPipelineServiceConnectionId *string
```

- *Type:* *string

The Azure DevOps Pipeline Service Connection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#ado_pipeline_service_connection_id AzureadProvider#ado_pipeline_service_connection_id}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#alias AzureadProvider#alias}

---

##### `ClientCertificate`<sup>Optional</sup> <a name="ClientCertificate" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificate"></a>

```go
ClientCertificate *string
```

- *Type:* *string

Base64 encoded PKCS#12 certificate bundle to use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#client_certificate AzureadProvider#client_certificate}

---

##### `ClientCertificatePassword`<sup>Optional</sup> <a name="ClientCertificatePassword" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePassword"></a>

```go
ClientCertificatePassword *string
```

- *Type:* *string

The password to decrypt the Client Certificate. For use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#client_certificate_password AzureadProvider#client_certificate_password}

---

##### `ClientCertificatePath`<sup>Optional</sup> <a name="ClientCertificatePath" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientCertificatePath"></a>

```go
ClientCertificatePath *string
```

- *Type:* *string

The path to the Client Certificate associated with the Service Principal for use when authenticating as a Service Principal using a Client Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#client_certificate_path AzureadProvider#client_certificate_path}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The Client ID which should be used for service principal authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#client_id AzureadProvider#client_id}

---

##### `ClientIdFilePath`<sup>Optional</sup> <a name="ClientIdFilePath" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientIdFilePath"></a>

```go
ClientIdFilePath *string
```

- *Type:* *string

The path to a file containing the Client ID which should be used for service principal authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#client_id_file_path AzureadProvider#client_id_file_path}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The application password to use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#client_secret AzureadProvider#client_secret}

---

##### `ClientSecretFilePath`<sup>Optional</sup> <a name="ClientSecretFilePath" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.clientSecretFilePath"></a>

```go
ClientSecretFilePath *string
```

- *Type:* *string

The path to a file containing the application password to use when authenticating as a Service Principal using a Client Secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#client_secret_file_path AzureadProvider#client_secret_file_path}

---

##### `DisableTerraformPartnerId`<sup>Optional</sup> <a name="DisableTerraformPartnerId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.disableTerraformPartnerId"></a>

```go
DisableTerraformPartnerId interface{}
```

- *Type:* interface{}

Disable the Terraform Partner ID, which is used if a custom `partner_id` isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#disable_terraform_partner_id AzureadProvider#disable_terraform_partner_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.environment"></a>

```go
Environment *string
```

- *Type:* *string

The cloud environment which should be used.

Possible values are: `global` (also `public`), `usgovernmentl4` (also `usgovernment`), `usgovernmentl5` (also `dod`), and `china`. Defaults to `global`. Not used and should not be specified when `metadata_host` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#environment AzureadProvider#environment}

---

##### `MetadataHost`<sup>Optional</sup> <a name="MetadataHost" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.metadataHost"></a>

```go
MetadataHost *string
```

- *Type:* *string

The Hostname which should be used for the Azure Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#metadata_host AzureadProvider#metadata_host}

---

##### `MsiEndpoint`<sup>Optional</sup> <a name="MsiEndpoint" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.msiEndpoint"></a>

```go
MsiEndpoint *string
```

- *Type:* *string

The path to a custom endpoint for Managed Identity - in most circumstances this should be detected automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#msi_endpoint AzureadProvider#msi_endpoint}

---

##### `OidcRequestToken`<sup>Optional</sup> <a name="OidcRequestToken" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestToken"></a>

```go
OidcRequestToken *string
```

- *Type:* *string

The bearer token for the request to the OIDC provider.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#oidc_request_token AzureadProvider#oidc_request_token}

---

##### `OidcRequestUrl`<sup>Optional</sup> <a name="OidcRequestUrl" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcRequestUrl"></a>

```go
OidcRequestUrl *string
```

- *Type:* *string

The URL for the OIDC provider from which to request an ID token.

For use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#oidc_request_url AzureadProvider#oidc_request_url}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcToken"></a>

```go
OidcToken *string
```

- *Type:* *string

The ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#oidc_token AzureadProvider#oidc_token}

---

##### `OidcTokenFilePath`<sup>Optional</sup> <a name="OidcTokenFilePath" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.oidcTokenFilePath"></a>

```go
OidcTokenFilePath *string
```

- *Type:* *string

The path to a file containing an ID token for use when authenticating as a Service Principal using OpenID Connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#oidc_token_file_path AzureadProvider#oidc_token_file_path}

---

##### `PartnerId`<sup>Optional</sup> <a name="PartnerId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.partnerId"></a>

```go
PartnerId *string
```

- *Type:* *string

A GUID/UUID that is registered with Microsoft to facilitate partner resource usage attribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#partner_id AzureadProvider#partner_id}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

The Tenant ID which should be used. Works with all authentication methods except Managed Identity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#tenant_id AzureadProvider#tenant_id}

---

##### `UseAksWorkloadIdentity`<sup>Optional</sup> <a name="UseAksWorkloadIdentity" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useAksWorkloadIdentity"></a>

```go
UseAksWorkloadIdentity interface{}
```

- *Type:* interface{}

Allow Azure AKS Workload Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#use_aks_workload_identity AzureadProvider#use_aks_workload_identity}

---

##### `UseCli`<sup>Optional</sup> <a name="UseCli" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useCli"></a>

```go
UseCli interface{}
```

- *Type:* interface{}

Allow Azure CLI to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#use_cli AzureadProvider#use_cli}

---

##### `UseMsi`<sup>Optional</sup> <a name="UseMsi" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useMsi"></a>

```go
UseMsi interface{}
```

- *Type:* interface{}

Allow Managed Identity to be used for Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#use_msi AzureadProvider#use_msi}

---

##### `UseOidc`<sup>Optional</sup> <a name="UseOidc" id="@cdktf/provider-azuread.provider.AzureadProviderConfig.property.useOidc"></a>

```go
UseOidc interface{}
```

- *Type:* interface{}

Allow OpenID Connect to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.4.0/docs#use_oidc AzureadProvider#use_oidc}

---



