# `azuread_application`

Refer to the Terraform Registory for docs: [`azuread_application`](https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application).

# `application` Submodule <a name="`application` Submodule" id="@cdktf/provider-azuread.application"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Application <a name="Application" id="@cdktf/provider-azuread.application.Application"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application azuread_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.Application.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplication(scope Construct, id *string, config ApplicationConfig) Application
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.application.Application.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig">ApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.application.Application.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationConfig">ApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.application.Application.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.application.Application.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.application.Application.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putApi">PutApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putAppRole">PutAppRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putFeatureTags">PutFeatureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putOptionalClaims">PutOptionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putPublicClient">PutPublicClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putRequiredResourceAccess">PutRequiredResourceAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putSinglePageApplication">PutSinglePageApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.putWeb">PutWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetApi">ResetApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetAppRole">ResetAppRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetDeviceOnlyAuthEnabled">ResetDeviceOnlyAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetFallbackPublicClientEnabled">ResetFallbackPublicClientEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetFeatureTags">ResetFeatureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetGroupMembershipClaims">ResetGroupMembershipClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetIdentifierUris">ResetIdentifierUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetLogoImage">ResetLogoImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetMarketingUrl">ResetMarketingUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOauth2PostResponseRequired">ResetOauth2PostResponseRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOptionalClaims">ResetOptionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetOwners">ResetOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetPreventDuplicateNames">ResetPreventDuplicateNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetPrivacyStatementUrl">ResetPrivacyStatementUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetPublicClient">ResetPublicClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetRequiredResourceAccess">ResetRequiredResourceAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetServiceManagementReference">ResetServiceManagementReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetSignInAudience">ResetSignInAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetSinglePageApplication">ResetSinglePageApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetSupportUrl">ResetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTemplateId">ResetTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTermsOfServiceUrl">ResetTermsOfServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.resetWeb">ResetWeb</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.Application.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.application.Application.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.application.Application.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.application.Application.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.application.Application.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.application.Application.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.application.Application.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.application.Application.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.Application.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.Application.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.Application.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.Application.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.Application.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.Application.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.Application.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.Application.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.Application.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.Application.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.Application.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutApi` <a name="PutApi" id="@cdktf/provider-azuread.application.Application.putApi"></a>

```go
func PutApi(value ApplicationApi)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putApi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

---

##### `PutAppRole` <a name="PutAppRole" id="@cdktf/provider-azuread.application.Application.putAppRole"></a>

```go
func PutAppRole(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putAppRole.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFeatureTags` <a name="PutFeatureTags" id="@cdktf/provider-azuread.application.Application.putFeatureTags"></a>

```go
func PutFeatureTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putFeatureTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOptionalClaims` <a name="PutOptionalClaims" id="@cdktf/provider-azuread.application.Application.putOptionalClaims"></a>

```go
func PutOptionalClaims(value ApplicationOptionalClaims)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putOptionalClaims.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

---

##### `PutPublicClient` <a name="PutPublicClient" id="@cdktf/provider-azuread.application.Application.putPublicClient"></a>

```go
func PutPublicClient(value ApplicationPublicClient)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putPublicClient.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

---

##### `PutRequiredResourceAccess` <a name="PutRequiredResourceAccess" id="@cdktf/provider-azuread.application.Application.putRequiredResourceAccess"></a>

```go
func PutRequiredResourceAccess(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putRequiredResourceAccess.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSinglePageApplication` <a name="PutSinglePageApplication" id="@cdktf/provider-azuread.application.Application.putSinglePageApplication"></a>

```go
func PutSinglePageApplication(value ApplicationSinglePageApplication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putSinglePageApplication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.application.Application.putTimeouts"></a>

```go
func PutTimeouts(value ApplicationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>

---

##### `PutWeb` <a name="PutWeb" id="@cdktf/provider-azuread.application.Application.putWeb"></a>

```go
func PutWeb(value ApplicationWeb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.Application.putWeb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

---

##### `ResetApi` <a name="ResetApi" id="@cdktf/provider-azuread.application.Application.resetApi"></a>

```go
func ResetApi()
```

##### `ResetAppRole` <a name="ResetAppRole" id="@cdktf/provider-azuread.application.Application.resetAppRole"></a>

```go
func ResetAppRole()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azuread.application.Application.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDeviceOnlyAuthEnabled` <a name="ResetDeviceOnlyAuthEnabled" id="@cdktf/provider-azuread.application.Application.resetDeviceOnlyAuthEnabled"></a>

```go
func ResetDeviceOnlyAuthEnabled()
```

##### `ResetFallbackPublicClientEnabled` <a name="ResetFallbackPublicClientEnabled" id="@cdktf/provider-azuread.application.Application.resetFallbackPublicClientEnabled"></a>

```go
func ResetFallbackPublicClientEnabled()
```

##### `ResetFeatureTags` <a name="ResetFeatureTags" id="@cdktf/provider-azuread.application.Application.resetFeatureTags"></a>

```go
func ResetFeatureTags()
```

##### `ResetGroupMembershipClaims` <a name="ResetGroupMembershipClaims" id="@cdktf/provider-azuread.application.Application.resetGroupMembershipClaims"></a>

```go
func ResetGroupMembershipClaims()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.application.Application.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentifierUris` <a name="ResetIdentifierUris" id="@cdktf/provider-azuread.application.Application.resetIdentifierUris"></a>

```go
func ResetIdentifierUris()
```

##### `ResetLogoImage` <a name="ResetLogoImage" id="@cdktf/provider-azuread.application.Application.resetLogoImage"></a>

```go
func ResetLogoImage()
```

##### `ResetMarketingUrl` <a name="ResetMarketingUrl" id="@cdktf/provider-azuread.application.Application.resetMarketingUrl"></a>

```go
func ResetMarketingUrl()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-azuread.application.Application.resetNotes"></a>

```go
func ResetNotes()
```

##### `ResetOauth2PostResponseRequired` <a name="ResetOauth2PostResponseRequired" id="@cdktf/provider-azuread.application.Application.resetOauth2PostResponseRequired"></a>

```go
func ResetOauth2PostResponseRequired()
```

##### `ResetOptionalClaims` <a name="ResetOptionalClaims" id="@cdktf/provider-azuread.application.Application.resetOptionalClaims"></a>

```go
func ResetOptionalClaims()
```

##### `ResetOwners` <a name="ResetOwners" id="@cdktf/provider-azuread.application.Application.resetOwners"></a>

```go
func ResetOwners()
```

##### `ResetPreventDuplicateNames` <a name="ResetPreventDuplicateNames" id="@cdktf/provider-azuread.application.Application.resetPreventDuplicateNames"></a>

```go
func ResetPreventDuplicateNames()
```

##### `ResetPrivacyStatementUrl` <a name="ResetPrivacyStatementUrl" id="@cdktf/provider-azuread.application.Application.resetPrivacyStatementUrl"></a>

```go
func ResetPrivacyStatementUrl()
```

##### `ResetPublicClient` <a name="ResetPublicClient" id="@cdktf/provider-azuread.application.Application.resetPublicClient"></a>

```go
func ResetPublicClient()
```

##### `ResetRequiredResourceAccess` <a name="ResetRequiredResourceAccess" id="@cdktf/provider-azuread.application.Application.resetRequiredResourceAccess"></a>

```go
func ResetRequiredResourceAccess()
```

##### `ResetServiceManagementReference` <a name="ResetServiceManagementReference" id="@cdktf/provider-azuread.application.Application.resetServiceManagementReference"></a>

```go
func ResetServiceManagementReference()
```

##### `ResetSignInAudience` <a name="ResetSignInAudience" id="@cdktf/provider-azuread.application.Application.resetSignInAudience"></a>

```go
func ResetSignInAudience()
```

##### `ResetSinglePageApplication` <a name="ResetSinglePageApplication" id="@cdktf/provider-azuread.application.Application.resetSinglePageApplication"></a>

```go
func ResetSinglePageApplication()
```

##### `ResetSupportUrl` <a name="ResetSupportUrl" id="@cdktf/provider-azuread.application.Application.resetSupportUrl"></a>

```go
func ResetSupportUrl()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azuread.application.Application.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTemplateId` <a name="ResetTemplateId" id="@cdktf/provider-azuread.application.Application.resetTemplateId"></a>

```go
func ResetTemplateId()
```

##### `ResetTermsOfServiceUrl` <a name="ResetTermsOfServiceUrl" id="@cdktf/provider-azuread.application.Application.resetTermsOfServiceUrl"></a>

```go
func ResetTermsOfServiceUrl()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.application.Application.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWeb` <a name="ResetWeb" id="@cdktf/provider-azuread.application.Application.resetWeb"></a>

```go
func ResetWeb()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.application.Application.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.application.Application.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.Application_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.application.Application.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.application.Application.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.Application_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.application.Application.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.application.Application.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.Application_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.application.Application.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.api">Api</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference">ApplicationApiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.appRole">AppRole</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList">ApplicationAppRoleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.appRoleIds">AppRoleIds</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.disabledByMicrosoft">DisabledByMicrosoft</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.featureTags">FeatureTags</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList">ApplicationFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.logoUrl">LogoUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.oauth2PermissionScopeIds">Oauth2PermissionScopeIds</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.optionalClaims">OptionalClaims</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference">ApplicationOptionalClaimsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.publicClient">PublicClient</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference">ApplicationPublicClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.publisherDomain">PublisherDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.requiredResourceAccess">RequiredResourceAccess</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList">ApplicationRequiredResourceAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.singlePageApplication">SinglePageApplication</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference">ApplicationSinglePageApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference">ApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.web">Web</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference">ApplicationWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.apiInput">ApiInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.appRoleInput">AppRoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabledInput">DeviceOnlyAuthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabledInput">FallbackPublicClientEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.featureTagsInput">FeatureTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.groupMembershipClaimsInput">GroupMembershipClaimsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.identifierUrisInput">IdentifierUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.logoImageInput">LogoImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.marketingUrlInput">MarketingUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.notesInput">NotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequiredInput">Oauth2PostResponseRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.optionalClaimsInput">OptionalClaimsInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.ownersInput">OwnersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.preventDuplicateNamesInput">PreventDuplicateNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.privacyStatementUrlInput">PrivacyStatementUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.publicClientInput">PublicClientInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.requiredResourceAccessInput">RequiredResourceAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.serviceManagementReferenceInput">ServiceManagementReferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.signInAudienceInput">SignInAudienceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.singlePageApplicationInput">SinglePageApplicationInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.supportUrlInput">SupportUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.templateIdInput">TemplateIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.termsOfServiceUrlInput">TermsOfServiceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.webInput">WebInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabled">DeviceOnlyAuthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabled">FallbackPublicClientEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.groupMembershipClaims">GroupMembershipClaims</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.identifierUris">IdentifierUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.logoImage">LogoImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.marketingUrl">MarketingUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequired">Oauth2PostResponseRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.owners">Owners</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.preventDuplicateNames">PreventDuplicateNames</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.privacyStatementUrl">PrivacyStatementUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.serviceManagementReference">ServiceManagementReference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.signInAudience">SignInAudience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.templateId">TemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.termsOfServiceUrl">TermsOfServiceUrl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.application.Application.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.application.Application.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.Application.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.application.Application.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.application.Application.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.application.Application.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.application.Application.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.application.Application.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.application.Application.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.application.Application.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.application.Application.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.application.Application.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.application.Application.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.application.Application.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktf/provider-azuread.application.Application.property.api"></a>

```go
func Api() ApplicationApiOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference">ApplicationApiOutputReference</a>

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-azuread.application.Application.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `AppRole`<sup>Required</sup> <a name="AppRole" id="@cdktf/provider-azuread.application.Application.property.appRole"></a>

```go
func AppRole() ApplicationAppRoleList
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList">ApplicationAppRoleList</a>

---

##### `AppRoleIds`<sup>Required</sup> <a name="AppRoleIds" id="@cdktf/provider-azuread.application.Application.property.appRoleIds"></a>

```go
func AppRoleIds() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisabledByMicrosoft`<sup>Required</sup> <a name="DisabledByMicrosoft" id="@cdktf/provider-azuread.application.Application.property.disabledByMicrosoft"></a>

```go
func DisabledByMicrosoft() *string
```

- *Type:* *string

---

##### `FeatureTags`<sup>Required</sup> <a name="FeatureTags" id="@cdktf/provider-azuread.application.Application.property.featureTags"></a>

```go
func FeatureTags() ApplicationFeatureTagsList
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList">ApplicationFeatureTagsList</a>

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-azuread.application.Application.property.logoUrl"></a>

```go
func LogoUrl() *string
```

- *Type:* *string

---

##### `Oauth2PermissionScopeIds`<sup>Required</sup> <a name="Oauth2PermissionScopeIds" id="@cdktf/provider-azuread.application.Application.property.oauth2PermissionScopeIds"></a>

```go
func Oauth2PermissionScopeIds() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.application.Application.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `OptionalClaims`<sup>Required</sup> <a name="OptionalClaims" id="@cdktf/provider-azuread.application.Application.property.optionalClaims"></a>

```go
func OptionalClaims() ApplicationOptionalClaimsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference">ApplicationOptionalClaimsOutputReference</a>

---

##### `PublicClient`<sup>Required</sup> <a name="PublicClient" id="@cdktf/provider-azuread.application.Application.property.publicClient"></a>

```go
func PublicClient() ApplicationPublicClientOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference">ApplicationPublicClientOutputReference</a>

---

##### `PublisherDomain`<sup>Required</sup> <a name="PublisherDomain" id="@cdktf/provider-azuread.application.Application.property.publisherDomain"></a>

```go
func PublisherDomain() *string
```

- *Type:* *string

---

##### `RequiredResourceAccess`<sup>Required</sup> <a name="RequiredResourceAccess" id="@cdktf/provider-azuread.application.Application.property.requiredResourceAccess"></a>

```go
func RequiredResourceAccess() ApplicationRequiredResourceAccessList
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList">ApplicationRequiredResourceAccessList</a>

---

##### `SinglePageApplication`<sup>Required</sup> <a name="SinglePageApplication" id="@cdktf/provider-azuread.application.Application.property.singlePageApplication"></a>

```go
func SinglePageApplication() ApplicationSinglePageApplicationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference">ApplicationSinglePageApplicationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.application.Application.property.timeouts"></a>

```go
func Timeouts() ApplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference">ApplicationTimeoutsOutputReference</a>

---

##### `Web`<sup>Required</sup> <a name="Web" id="@cdktf/provider-azuread.application.Application.property.web"></a>

```go
func Web() ApplicationWebOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference">ApplicationWebOutputReference</a>

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktf/provider-azuread.application.Application.property.apiInput"></a>

```go
func ApiInput() ApplicationApi
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

---

##### `AppRoleInput`<sup>Optional</sup> <a name="AppRoleInput" id="@cdktf/provider-azuread.application.Application.property.appRoleInput"></a>

```go
func AppRoleInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azuread.application.Application.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DeviceOnlyAuthEnabledInput`<sup>Optional</sup> <a name="DeviceOnlyAuthEnabledInput" id="@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabledInput"></a>

```go
func DeviceOnlyAuthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.application.Application.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FallbackPublicClientEnabledInput`<sup>Optional</sup> <a name="FallbackPublicClientEnabledInput" id="@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabledInput"></a>

```go
func FallbackPublicClientEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FeatureTagsInput`<sup>Optional</sup> <a name="FeatureTagsInput" id="@cdktf/provider-azuread.application.Application.property.featureTagsInput"></a>

```go
func FeatureTagsInput() interface{}
```

- *Type:* interface{}

---

##### `GroupMembershipClaimsInput`<sup>Optional</sup> <a name="GroupMembershipClaimsInput" id="@cdktf/provider-azuread.application.Application.property.groupMembershipClaimsInput"></a>

```go
func GroupMembershipClaimsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentifierUrisInput`<sup>Optional</sup> <a name="IdentifierUrisInput" id="@cdktf/provider-azuread.application.Application.property.identifierUrisInput"></a>

```go
func IdentifierUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.application.Application.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogoImageInput`<sup>Optional</sup> <a name="LogoImageInput" id="@cdktf/provider-azuread.application.Application.property.logoImageInput"></a>

```go
func LogoImageInput() *string
```

- *Type:* *string

---

##### `MarketingUrlInput`<sup>Optional</sup> <a name="MarketingUrlInput" id="@cdktf/provider-azuread.application.Application.property.marketingUrlInput"></a>

```go
func MarketingUrlInput() *string
```

- *Type:* *string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-azuread.application.Application.property.notesInput"></a>

```go
func NotesInput() *string
```

- *Type:* *string

---

##### `Oauth2PostResponseRequiredInput`<sup>Optional</sup> <a name="Oauth2PostResponseRequiredInput" id="@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequiredInput"></a>

```go
func Oauth2PostResponseRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `OptionalClaimsInput`<sup>Optional</sup> <a name="OptionalClaimsInput" id="@cdktf/provider-azuread.application.Application.property.optionalClaimsInput"></a>

```go
func OptionalClaimsInput() ApplicationOptionalClaims
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

---

##### `OwnersInput`<sup>Optional</sup> <a name="OwnersInput" id="@cdktf/provider-azuread.application.Application.property.ownersInput"></a>

```go
func OwnersInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreventDuplicateNamesInput`<sup>Optional</sup> <a name="PreventDuplicateNamesInput" id="@cdktf/provider-azuread.application.Application.property.preventDuplicateNamesInput"></a>

```go
func PreventDuplicateNamesInput() interface{}
```

- *Type:* interface{}

---

##### `PrivacyStatementUrlInput`<sup>Optional</sup> <a name="PrivacyStatementUrlInput" id="@cdktf/provider-azuread.application.Application.property.privacyStatementUrlInput"></a>

```go
func PrivacyStatementUrlInput() *string
```

- *Type:* *string

---

##### `PublicClientInput`<sup>Optional</sup> <a name="PublicClientInput" id="@cdktf/provider-azuread.application.Application.property.publicClientInput"></a>

```go
func PublicClientInput() ApplicationPublicClient
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

---

##### `RequiredResourceAccessInput`<sup>Optional</sup> <a name="RequiredResourceAccessInput" id="@cdktf/provider-azuread.application.Application.property.requiredResourceAccessInput"></a>

```go
func RequiredResourceAccessInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceManagementReferenceInput`<sup>Optional</sup> <a name="ServiceManagementReferenceInput" id="@cdktf/provider-azuread.application.Application.property.serviceManagementReferenceInput"></a>

```go
func ServiceManagementReferenceInput() *string
```

- *Type:* *string

---

##### `SignInAudienceInput`<sup>Optional</sup> <a name="SignInAudienceInput" id="@cdktf/provider-azuread.application.Application.property.signInAudienceInput"></a>

```go
func SignInAudienceInput() *string
```

- *Type:* *string

---

##### `SinglePageApplicationInput`<sup>Optional</sup> <a name="SinglePageApplicationInput" id="@cdktf/provider-azuread.application.Application.property.singlePageApplicationInput"></a>

```go
func SinglePageApplicationInput() ApplicationSinglePageApplication
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

---

##### `SupportUrlInput`<sup>Optional</sup> <a name="SupportUrlInput" id="@cdktf/provider-azuread.application.Application.property.supportUrlInput"></a>

```go
func SupportUrlInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azuread.application.Application.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TemplateIdInput`<sup>Optional</sup> <a name="TemplateIdInput" id="@cdktf/provider-azuread.application.Application.property.templateIdInput"></a>

```go
func TemplateIdInput() *string
```

- *Type:* *string

---

##### `TermsOfServiceUrlInput`<sup>Optional</sup> <a name="TermsOfServiceUrlInput" id="@cdktf/provider-azuread.application.Application.property.termsOfServiceUrlInput"></a>

```go
func TermsOfServiceUrlInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.application.Application.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WebInput`<sup>Optional</sup> <a name="WebInput" id="@cdktf/provider-azuread.application.Application.property.webInput"></a>

```go
func WebInput() ApplicationWeb
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.application.Application.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeviceOnlyAuthEnabled`<sup>Required</sup> <a name="DeviceOnlyAuthEnabled" id="@cdktf/provider-azuread.application.Application.property.deviceOnlyAuthEnabled"></a>

```go
func DeviceOnlyAuthEnabled() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.application.Application.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FallbackPublicClientEnabled`<sup>Required</sup> <a name="FallbackPublicClientEnabled" id="@cdktf/provider-azuread.application.Application.property.fallbackPublicClientEnabled"></a>

```go
func FallbackPublicClientEnabled() interface{}
```

- *Type:* interface{}

---

##### `GroupMembershipClaims`<sup>Required</sup> <a name="GroupMembershipClaims" id="@cdktf/provider-azuread.application.Application.property.groupMembershipClaims"></a>

```go
func GroupMembershipClaims() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.Application.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdentifierUris`<sup>Required</sup> <a name="IdentifierUris" id="@cdktf/provider-azuread.application.Application.property.identifierUris"></a>

```go
func IdentifierUris() *[]*string
```

- *Type:* *[]*string

---

##### `LogoImage`<sup>Required</sup> <a name="LogoImage" id="@cdktf/provider-azuread.application.Application.property.logoImage"></a>

```go
func LogoImage() *string
```

- *Type:* *string

---

##### `MarketingUrl`<sup>Required</sup> <a name="MarketingUrl" id="@cdktf/provider-azuread.application.Application.property.marketingUrl"></a>

```go
func MarketingUrl() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-azuread.application.Application.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `Oauth2PostResponseRequired`<sup>Required</sup> <a name="Oauth2PostResponseRequired" id="@cdktf/provider-azuread.application.Application.property.oauth2PostResponseRequired"></a>

```go
func Oauth2PostResponseRequired() interface{}
```

- *Type:* interface{}

---

##### `Owners`<sup>Required</sup> <a name="Owners" id="@cdktf/provider-azuread.application.Application.property.owners"></a>

```go
func Owners() *[]*string
```

- *Type:* *[]*string

---

##### `PreventDuplicateNames`<sup>Required</sup> <a name="PreventDuplicateNames" id="@cdktf/provider-azuread.application.Application.property.preventDuplicateNames"></a>

```go
func PreventDuplicateNames() interface{}
```

- *Type:* interface{}

---

##### `PrivacyStatementUrl`<sup>Required</sup> <a name="PrivacyStatementUrl" id="@cdktf/provider-azuread.application.Application.property.privacyStatementUrl"></a>

```go
func PrivacyStatementUrl() *string
```

- *Type:* *string

---

##### `ServiceManagementReference`<sup>Required</sup> <a name="ServiceManagementReference" id="@cdktf/provider-azuread.application.Application.property.serviceManagementReference"></a>

```go
func ServiceManagementReference() *string
```

- *Type:* *string

---

##### `SignInAudience`<sup>Required</sup> <a name="SignInAudience" id="@cdktf/provider-azuread.application.Application.property.signInAudience"></a>

```go
func SignInAudience() *string
```

- *Type:* *string

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktf/provider-azuread.application.Application.property.supportUrl"></a>

```go
func SupportUrl() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azuread.application.Application.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktf/provider-azuread.application.Application.property.templateId"></a>

```go
func TemplateId() *string
```

- *Type:* *string

---

##### `TermsOfServiceUrl`<sup>Required</sup> <a name="TermsOfServiceUrl" id="@cdktf/provider-azuread.application.Application.property.termsOfServiceUrl"></a>

```go
func TermsOfServiceUrl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.Application.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.application.Application.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationApi <a name="ApplicationApi" id="@cdktf/provider-azuread.application.ApplicationApi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationApi.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

&application.ApplicationApi {
	KnownClientApplications: *[]*string,
	MappedClaimsEnabled: interface{},
	Oauth2PermissionScope: interface{},
	RequestedAccessTokenVersion: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.knownClientApplications">KnownClientApplications</a></code> | <code>*[]*string</code> | Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.mappedClaimsEnabled">MappedClaimsEnabled</a></code> | <code>interface{}</code> | Allows an application to use claims mapping without specifying a custom signing key. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.oauth2PermissionScope">Oauth2PermissionScope</a></code> | <code>interface{}</code> | oauth2_permission_scope block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApi.property.requestedAccessTokenVersion">RequestedAccessTokenVersion</a></code> | <code>*f64</code> | The access token version expected by this resource. |

---

##### `KnownClientApplications`<sup>Optional</sup> <a name="KnownClientApplications" id="@cdktf/provider-azuread.application.ApplicationApi.property.knownClientApplications"></a>

```go
KnownClientApplications *[]*string
```

- *Type:* *[]*string

Used for bundling consent if you have a solution that contains two parts: a client app and a custom web API app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#known_client_applications Application#known_client_applications}

---

##### `MappedClaimsEnabled`<sup>Optional</sup> <a name="MappedClaimsEnabled" id="@cdktf/provider-azuread.application.ApplicationApi.property.mappedClaimsEnabled"></a>

```go
MappedClaimsEnabled interface{}
```

- *Type:* interface{}

Allows an application to use claims mapping without specifying a custom signing key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#mapped_claims_enabled Application#mapped_claims_enabled}

---

##### `Oauth2PermissionScope`<sup>Optional</sup> <a name="Oauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApi.property.oauth2PermissionScope"></a>

```go
Oauth2PermissionScope interface{}
```

- *Type:* interface{}

oauth2_permission_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#oauth2_permission_scope Application#oauth2_permission_scope}

---

##### `RequestedAccessTokenVersion`<sup>Optional</sup> <a name="RequestedAccessTokenVersion" id="@cdktf/provider-azuread.application.ApplicationApi.property.requestedAccessTokenVersion"></a>

```go
RequestedAccessTokenVersion *f64
```

- *Type:* *f64

The access token version expected by this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#requested_access_token_version Application#requested_access_token_version}

---

### ApplicationApiOauth2PermissionScope <a name="ApplicationApiOauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

&application.ApplicationApiOauth2PermissionScope {
	Id: *string,
	AdminConsentDescription: *string,
	AdminConsentDisplayName: *string,
	Enabled: interface{},
	Type: *string,
	UserConsentDescription: *string,
	UserConsentDisplayName: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.id">Id</a></code> | <code>*string</code> | The unique identifier of the delegated permission. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDescription">AdminConsentDescription</a></code> | <code>*string</code> | Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDisplayName">AdminConsentDisplayName</a></code> | <code>*string</code> | Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.enabled">Enabled</a></code> | <code>interface{}</code> | Determines if the permission scope is enabled. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.type">Type</a></code> | <code>*string</code> | Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDescription">UserConsentDescription</a></code> | <code>*string</code> | Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDisplayName">UserConsentDisplayName</a></code> | <code>*string</code> | Display name for the delegated permission that appears in the end user consent experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.value">Value</a></code> | <code>*string</code> | The value that is used for the `scp` claim in OAuth 2.0 access tokens. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique identifier of the delegated permission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#id Application#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `AdminConsentDescription`<sup>Optional</sup> <a name="AdminConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDescription"></a>

```go
AdminConsentDescription *string
```

- *Type:* *string

Delegated permission description that appears in all tenant-wide admin consent experiences, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#admin_consent_description Application#admin_consent_description}

---

##### `AdminConsentDisplayName`<sup>Optional</sup> <a name="AdminConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.adminConsentDisplayName"></a>

```go
AdminConsentDisplayName *string
```

- *Type:* *string

Display name for the delegated permission, intended to be read by an administrator granting the permission on behalf of all users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#admin_consent_display_name Application#admin_consent_display_name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Determines if the permission scope is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#enabled Application#enabled}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.type"></a>

```go
Type *string
```

- *Type:* *string

Whether this delegated permission should be considered safe for non-admin users to consent to on behalf of themselves, or whether an administrator should be required for consent to the permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#type Application#type}

---

##### `UserConsentDescription`<sup>Optional</sup> <a name="UserConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDescription"></a>

```go
UserConsentDescription *string
```

- *Type:* *string

Delegated permission description that appears in the end user consent experience, intended to be read by a user consenting on their own behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#user_consent_description Application#user_consent_description}

---

##### `UserConsentDisplayName`<sup>Optional</sup> <a name="UserConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.userConsentDisplayName"></a>

```go
UserConsentDisplayName *string
```

- *Type:* *string

Display name for the delegated permission that appears in the end user consent experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#user_consent_display_name Application#user_consent_display_name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScope.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value that is used for the `scp` claim in OAuth 2.0 access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#value Application#value}

---

### ApplicationAppRole <a name="ApplicationAppRole" id="@cdktf/provider-azuread.application.ApplicationAppRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationAppRole.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

&application.ApplicationAppRole {
	AllowedMemberTypes: *[]*string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	Enabled: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.allowedMemberTypes">AllowedMemberTypes</a></code> | <code>*[]*string</code> | Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.description">Description</a></code> | <code>*string</code> | Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.displayName">DisplayName</a></code> | <code>*string</code> | Display name for the app role that appears during app role assignment and in consent experiences. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.id">Id</a></code> | <code>*string</code> | The unique identifier of the app role. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.enabled">Enabled</a></code> | <code>interface{}</code> | Determines if the app role is enabled. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRole.property.value">Value</a></code> | <code>*string</code> | The value that is used for the `roles` claim in ID tokens and OAuth 2.0 access tokens that are authenticating an assigned service or user principal. |

---

##### `AllowedMemberTypes`<sup>Required</sup> <a name="AllowedMemberTypes" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.allowedMemberTypes"></a>

```go
AllowedMemberTypes *[]*string
```

- *Type:* *[]*string

Specifies whether this app role definition can be assigned to users and groups by setting to `User`, or to other applications (that are accessing this application in a standalone scenario) by setting to `Application`, or to both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#allowed_member_types Application#allowed_member_types}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the app role that appears when the role is being assigned and, if the role functions as an application permissions, during the consent experiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#description Application#description}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Display name for the app role that appears during app role assignment and in consent experiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#display_name Application#display_name}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.id"></a>

```go
Id *string
```

- *Type:* *string

The unique identifier of the app role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#id Application#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Determines if the app role is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#enabled Application#enabled}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-azuread.application.ApplicationAppRole.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value that is used for the `roles` claim in ID tokens and OAuth 2.0 access tokens that are authenticating an assigned service or user principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#value Application#value}

---

### ApplicationConfig <a name="ApplicationConfig" id="@cdktf/provider-azuread.application.ApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

&application.ApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Api: github.com/cdktf/cdktf-provider-azuread-go/azuread.application.ApplicationApi,
	AppRole: interface{},
	Description: *string,
	DeviceOnlyAuthEnabled: interface{},
	FallbackPublicClientEnabled: interface{},
	FeatureTags: interface{},
	GroupMembershipClaims: *[]*string,
	Id: *string,
	IdentifierUris: *[]*string,
	LogoImage: *string,
	MarketingUrl: *string,
	Notes: *string,
	Oauth2PostResponseRequired: interface{},
	OptionalClaims: github.com/cdktf/cdktf-provider-azuread-go/azuread.application.ApplicationOptionalClaims,
	Owners: *[]*string,
	PreventDuplicateNames: interface{},
	PrivacyStatementUrl: *string,
	PublicClient: github.com/cdktf/cdktf-provider-azuread-go/azuread.application.ApplicationPublicClient,
	RequiredResourceAccess: interface{},
	ServiceManagementReference: *string,
	SignInAudience: *string,
	SinglePageApplication: github.com/cdktf/cdktf-provider-azuread-go/azuread.application.ApplicationSinglePageApplication,
	SupportUrl: *string,
	Tags: *[]*string,
	TemplateId: *string,
	TermsOfServiceUrl: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread.application.ApplicationTimeouts,
	Web: github.com/cdktf/cdktf-provider-azuread-go/azuread.application.ApplicationWeb,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.api">Api</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | api block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.appRole">AppRole</a></code> | <code>interface{}</code> | app_role block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.description">Description</a></code> | <code>*string</code> | Description of the application as shown to end users. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.deviceOnlyAuthEnabled">DeviceOnlyAuthEnabled</a></code> | <code>interface{}</code> | Specifies whether this application supports device authentication without a user. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.fallbackPublicClientEnabled">FallbackPublicClientEnabled</a></code> | <code>interface{}</code> | Specifies whether the application is a public client. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.featureTags">FeatureTags</a></code> | <code>interface{}</code> | feature_tags block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.groupMembershipClaims">GroupMembershipClaims</a></code> | <code>*[]*string</code> | Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#id Application#id}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.identifierUris">IdentifierUris</a></code> | <code>*[]*string</code> | The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.logoImage">LogoImage</a></code> | <code>*string</code> | Base64 encoded logo image in gif, png or jpeg format. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.marketingUrl">MarketingUrl</a></code> | <code>*string</code> | URL of the application's marketing page. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.notes">Notes</a></code> | <code>*string</code> | User-specified notes relevant for the management of the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.oauth2PostResponseRequired">Oauth2PostResponseRequired</a></code> | <code>interface{}</code> | Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.optionalClaims">OptionalClaims</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | optional_claims block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.owners">Owners</a></code> | <code>*[]*string</code> | A list of object IDs of principals that will be granted ownership of the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.preventDuplicateNames">PreventDuplicateNames</a></code> | <code>interface{}</code> | If `true`, will return an error if an existing application is found with the same name. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.privacyStatementUrl">PrivacyStatementUrl</a></code> | <code>*string</code> | URL of the application's privacy statement. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.publicClient">PublicClient</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | public_client block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.requiredResourceAccess">RequiredResourceAccess</a></code> | <code>interface{}</code> | required_resource_access block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.serviceManagementReference">ServiceManagementReference</a></code> | <code>*string</code> | References application or service contact information from a Service or Asset Management database. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.signInAudience">SignInAudience</a></code> | <code>*string</code> | The Microsoft account types that are supported for the current application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.singlePageApplication">SinglePageApplication</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | single_page_application block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.supportUrl">SupportUrl</a></code> | <code>*string</code> | URL of the application's support page. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A set of tags to apply to the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.templateId">TemplateId</a></code> | <code>*string</code> | Unique ID of the application template from which this application is created. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.termsOfServiceUrl">TermsOfServiceUrl</a></code> | <code>*string</code> | URL of the application's terms of service statement. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationConfig.property.web">Web</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | web block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.application.ApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.application.ApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.application.ApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.application.ApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.application.ApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.application.ApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.application.ApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.application.ApplicationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#display_name Application#display_name}

---

##### `Api`<sup>Optional</sup> <a name="Api" id="@cdktf/provider-azuread.application.ApplicationConfig.property.api"></a>

```go
Api ApplicationApi
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

api block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#api Application#api}

---

##### `AppRole`<sup>Optional</sup> <a name="AppRole" id="@cdktf/provider-azuread.application.ApplicationConfig.property.appRole"></a>

```go
AppRole interface{}
```

- *Type:* interface{}

app_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#app_role Application#app_role}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azuread.application.ApplicationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the application as shown to end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#description Application#description}

---

##### `DeviceOnlyAuthEnabled`<sup>Optional</sup> <a name="DeviceOnlyAuthEnabled" id="@cdktf/provider-azuread.application.ApplicationConfig.property.deviceOnlyAuthEnabled"></a>

```go
DeviceOnlyAuthEnabled interface{}
```

- *Type:* interface{}

Specifies whether this application supports device authentication without a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#device_only_auth_enabled Application#device_only_auth_enabled}

---

##### `FallbackPublicClientEnabled`<sup>Optional</sup> <a name="FallbackPublicClientEnabled" id="@cdktf/provider-azuread.application.ApplicationConfig.property.fallbackPublicClientEnabled"></a>

```go
FallbackPublicClientEnabled interface{}
```

- *Type:* interface{}

Specifies whether the application is a public client.

Appropriate for apps using token grant flows that don't use a redirect URI

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#fallback_public_client_enabled Application#fallback_public_client_enabled}

---

##### `FeatureTags`<sup>Optional</sup> <a name="FeatureTags" id="@cdktf/provider-azuread.application.ApplicationConfig.property.featureTags"></a>

```go
FeatureTags interface{}
```

- *Type:* interface{}

feature_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#feature_tags Application#feature_tags}

---

##### `GroupMembershipClaims`<sup>Optional</sup> <a name="GroupMembershipClaims" id="@cdktf/provider-azuread.application.ApplicationConfig.property.groupMembershipClaims"></a>

```go
GroupMembershipClaims *[]*string
```

- *Type:* *[]*string

Configures the `groups` claim issued in a user or OAuth 2.0 access token that the app expects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#group_membership_claims Application#group_membership_claims}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.application.ApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#id Application#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentifierUris`<sup>Optional</sup> <a name="IdentifierUris" id="@cdktf/provider-azuread.application.ApplicationConfig.property.identifierUris"></a>

```go
IdentifierUris *[]*string
```

- *Type:* *[]*string

The user-defined URI(s) that uniquely identify an application within its Azure AD tenant, or within a verified custom domain if the application is multi-tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#identifier_uris Application#identifier_uris}

---

##### `LogoImage`<sup>Optional</sup> <a name="LogoImage" id="@cdktf/provider-azuread.application.ApplicationConfig.property.logoImage"></a>

```go
LogoImage *string
```

- *Type:* *string

Base64 encoded logo image in gif, png or jpeg format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#logo_image Application#logo_image}

---

##### `MarketingUrl`<sup>Optional</sup> <a name="MarketingUrl" id="@cdktf/provider-azuread.application.ApplicationConfig.property.marketingUrl"></a>

```go
MarketingUrl *string
```

- *Type:* *string

URL of the application's marketing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#marketing_url Application#marketing_url}

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-azuread.application.ApplicationConfig.property.notes"></a>

```go
Notes *string
```

- *Type:* *string

User-specified notes relevant for the management of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#notes Application#notes}

---

##### `Oauth2PostResponseRequired`<sup>Optional</sup> <a name="Oauth2PostResponseRequired" id="@cdktf/provider-azuread.application.ApplicationConfig.property.oauth2PostResponseRequired"></a>

```go
Oauth2PostResponseRequired interface{}
```

- *Type:* interface{}

Specifies whether, as part of OAuth 2.0 token requests, Azure AD allows POST requests, as opposed to GET requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#oauth2_post_response_required Application#oauth2_post_response_required}

---

##### `OptionalClaims`<sup>Optional</sup> <a name="OptionalClaims" id="@cdktf/provider-azuread.application.ApplicationConfig.property.optionalClaims"></a>

```go
OptionalClaims ApplicationOptionalClaims
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

optional_claims block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#optional_claims Application#optional_claims}

---

##### `Owners`<sup>Optional</sup> <a name="Owners" id="@cdktf/provider-azuread.application.ApplicationConfig.property.owners"></a>

```go
Owners *[]*string
```

- *Type:* *[]*string

A list of object IDs of principals that will be granted ownership of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#owners Application#owners}

---

##### `PreventDuplicateNames`<sup>Optional</sup> <a name="PreventDuplicateNames" id="@cdktf/provider-azuread.application.ApplicationConfig.property.preventDuplicateNames"></a>

```go
PreventDuplicateNames interface{}
```

- *Type:* interface{}

If `true`, will return an error if an existing application is found with the same name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#prevent_duplicate_names Application#prevent_duplicate_names}

---

##### `PrivacyStatementUrl`<sup>Optional</sup> <a name="PrivacyStatementUrl" id="@cdktf/provider-azuread.application.ApplicationConfig.property.privacyStatementUrl"></a>

```go
PrivacyStatementUrl *string
```

- *Type:* *string

URL of the application's privacy statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#privacy_statement_url Application#privacy_statement_url}

---

##### `PublicClient`<sup>Optional</sup> <a name="PublicClient" id="@cdktf/provider-azuread.application.ApplicationConfig.property.publicClient"></a>

```go
PublicClient ApplicationPublicClient
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

public_client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#public_client Application#public_client}

---

##### `RequiredResourceAccess`<sup>Optional</sup> <a name="RequiredResourceAccess" id="@cdktf/provider-azuread.application.ApplicationConfig.property.requiredResourceAccess"></a>

```go
RequiredResourceAccess interface{}
```

- *Type:* interface{}

required_resource_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#required_resource_access Application#required_resource_access}

---

##### `ServiceManagementReference`<sup>Optional</sup> <a name="ServiceManagementReference" id="@cdktf/provider-azuread.application.ApplicationConfig.property.serviceManagementReference"></a>

```go
ServiceManagementReference *string
```

- *Type:* *string

References application or service contact information from a Service or Asset Management database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#service_management_reference Application#service_management_reference}

---

##### `SignInAudience`<sup>Optional</sup> <a name="SignInAudience" id="@cdktf/provider-azuread.application.ApplicationConfig.property.signInAudience"></a>

```go
SignInAudience *string
```

- *Type:* *string

The Microsoft account types that are supported for the current application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#sign_in_audience Application#sign_in_audience}

---

##### `SinglePageApplication`<sup>Optional</sup> <a name="SinglePageApplication" id="@cdktf/provider-azuread.application.ApplicationConfig.property.singlePageApplication"></a>

```go
SinglePageApplication ApplicationSinglePageApplication
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

single_page_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#single_page_application Application#single_page_application}

---

##### `SupportUrl`<sup>Optional</sup> <a name="SupportUrl" id="@cdktf/provider-azuread.application.ApplicationConfig.property.supportUrl"></a>

```go
SupportUrl *string
```

- *Type:* *string

URL of the application's support page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#support_url Application#support_url}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azuread.application.ApplicationConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A set of tags to apply to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#tags Application#tags}

---

##### `TemplateId`<sup>Optional</sup> <a name="TemplateId" id="@cdktf/provider-azuread.application.ApplicationConfig.property.templateId"></a>

```go
TemplateId *string
```

- *Type:* *string

Unique ID of the application template from which this application is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#template_id Application#template_id}

---

##### `TermsOfServiceUrl`<sup>Optional</sup> <a name="TermsOfServiceUrl" id="@cdktf/provider-azuread.application.ApplicationConfig.property.termsOfServiceUrl"></a>

```go
TermsOfServiceUrl *string
```

- *Type:* *string

URL of the application's terms of service statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#terms_of_service_url Application#terms_of_service_url}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.application.ApplicationConfig.property.timeouts"></a>

```go
Timeouts ApplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationTimeouts">ApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#timeouts Application#timeouts}

---

##### `Web`<sup>Optional</sup> <a name="Web" id="@cdktf/provider-azuread.application.ApplicationConfig.property.web"></a>

```go
Web ApplicationWeb
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

web block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#web Application#web}

---

### ApplicationFeatureTags <a name="ApplicationFeatureTags" id="@cdktf/provider-azuread.application.ApplicationFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

&application.ApplicationFeatureTags {
	CustomSingleSignOn: interface{},
	Enterprise: interface{},
	Gallery: interface{},
	Hide: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.customSingleSignOn">CustomSingleSignOn</a></code> | <code>interface{}</code> | Whether this application represents a custom SAML application for linked service principals. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.enterprise">Enterprise</a></code> | <code>interface{}</code> | Whether this application represents an Enterprise Application for linked service principals. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.gallery">Gallery</a></code> | <code>interface{}</code> | Whether this application represents a gallery application for linked service principals. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTags.property.hide">Hide</a></code> | <code>interface{}</code> | Whether this application is invisible to users in My Apps and Office 365 Launcher. |

---

##### `CustomSingleSignOn`<sup>Optional</sup> <a name="CustomSingleSignOn" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.customSingleSignOn"></a>

```go
CustomSingleSignOn interface{}
```

- *Type:* interface{}

Whether this application represents a custom SAML application for linked service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#custom_single_sign_on Application#custom_single_sign_on}

---

##### `Enterprise`<sup>Optional</sup> <a name="Enterprise" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.enterprise"></a>

```go
Enterprise interface{}
```

- *Type:* interface{}

Whether this application represents an Enterprise Application for linked service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#enterprise Application#enterprise}

---

##### `Gallery`<sup>Optional</sup> <a name="Gallery" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.gallery"></a>

```go
Gallery interface{}
```

- *Type:* interface{}

Whether this application represents a gallery application for linked service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#gallery Application#gallery}

---

##### `Hide`<sup>Optional</sup> <a name="Hide" id="@cdktf/provider-azuread.application.ApplicationFeatureTags.property.hide"></a>

```go
Hide interface{}
```

- *Type:* interface{}

Whether this application is invisible to users in My Apps and Office 365 Launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#hide Application#hide}

---

### ApplicationOptionalClaims <a name="ApplicationOptionalClaims" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

&application.ApplicationOptionalClaims {
	AccessToken: interface{},
	IdToken: interface{},
	Saml2Token: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.accessToken">AccessToken</a></code> | <code>interface{}</code> | access_token block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.idToken">IdToken</a></code> | <code>interface{}</code> | id_token block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.saml2Token">Saml2Token</a></code> | <code>interface{}</code> | saml2_token block. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.accessToken"></a>

```go
AccessToken interface{}
```

- *Type:* interface{}

access_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#access_token Application#access_token}

---

##### `IdToken`<sup>Optional</sup> <a name="IdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.idToken"></a>

```go
IdToken interface{}
```

- *Type:* interface{}

id_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#id_token Application#id_token}

---

##### `Saml2Token`<sup>Optional</sup> <a name="Saml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaims.property.saml2Token"></a>

```go
Saml2Token interface{}
```

- *Type:* interface{}

saml2_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#saml2_token Application#saml2_token}

---

### ApplicationOptionalClaimsAccessToken <a name="ApplicationOptionalClaimsAccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

&application.ApplicationOptionalClaimsAccessToken {
	Name: *string,
	AdditionalProperties: *[]*string,
	Essential: interface{},
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.name">Name</a></code> | <code>*string</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.additionalProperties">AdditionalProperties</a></code> | <code>*[]*string</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.essential">Essential</a></code> | <code>interface{}</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.source">Source</a></code> | <code>*string</code> | The source of the claim. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#name Application#name}

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.additionalProperties"></a>

```go
AdditionalProperties *[]*string
```

- *Type:* *[]*string

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#additional_properties Application#additional_properties}

---

##### `Essential`<sup>Optional</sup> <a name="Essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.essential"></a>

```go
Essential interface{}
```

- *Type:* interface{}

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#essential Application#essential}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessToken.property.source"></a>

```go
Source *string
```

- *Type:* *string

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#source Application#source}

---

### ApplicationOptionalClaimsIdToken <a name="ApplicationOptionalClaimsIdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

&application.ApplicationOptionalClaimsIdToken {
	Name: *string,
	AdditionalProperties: *[]*string,
	Essential: interface{},
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.name">Name</a></code> | <code>*string</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.additionalProperties">AdditionalProperties</a></code> | <code>*[]*string</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.essential">Essential</a></code> | <code>interface{}</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.source">Source</a></code> | <code>*string</code> | The source of the claim. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#name Application#name}

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.additionalProperties"></a>

```go
AdditionalProperties *[]*string
```

- *Type:* *[]*string

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#additional_properties Application#additional_properties}

---

##### `Essential`<sup>Optional</sup> <a name="Essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.essential"></a>

```go
Essential interface{}
```

- *Type:* interface{}

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#essential Application#essential}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdToken.property.source"></a>

```go
Source *string
```

- *Type:* *string

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#source Application#source}

---

### ApplicationOptionalClaimsSaml2Token <a name="ApplicationOptionalClaimsSaml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

&application.ApplicationOptionalClaimsSaml2Token {
	Name: *string,
	AdditionalProperties: *[]*string,
	Essential: interface{},
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.name">Name</a></code> | <code>*string</code> | The name of the optional claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.additionalProperties">AdditionalProperties</a></code> | <code>*[]*string</code> | List of additional properties of the claim. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.essential">Essential</a></code> | <code>interface{}</code> | Whether the claim specified by the client is necessary to ensure a smooth authorization experience. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.source">Source</a></code> | <code>*string</code> | The source of the claim. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the optional claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#name Application#name}

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.additionalProperties"></a>

```go
AdditionalProperties *[]*string
```

- *Type:* *[]*string

List of additional properties of the claim.

If a property exists in this list, it modifies the behaviour of the optional claim

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#additional_properties Application#additional_properties}

---

##### `Essential`<sup>Optional</sup> <a name="Essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.essential"></a>

```go
Essential interface{}
```

- *Type:* interface{}

Whether the claim specified by the client is necessary to ensure a smooth authorization experience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#essential Application#essential}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2Token.property.source"></a>

```go
Source *string
```

- *Type:* *string

The source of the claim.

If `source` is absent, the claim is a predefined optional claim. If `source` is `user`, the value of `name` is the extension property from the user object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#source Application#source}

---

### ApplicationPublicClient <a name="ApplicationPublicClient" id="@cdktf/provider-azuread.application.ApplicationPublicClient"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationPublicClient.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

&application.ApplicationPublicClient {
	RedirectUris: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. |

---

##### `RedirectUris`<sup>Optional</sup> <a name="RedirectUris" id="@cdktf/provider-azuread.application.ApplicationPublicClient.property.redirectUris"></a>

```go
RedirectUris *[]*string
```

- *Type:* *[]*string

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#redirect_uris Application#redirect_uris}

---

### ApplicationRequiredResourceAccess <a name="ApplicationRequiredResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

&application.ApplicationRequiredResourceAccess {
	ResourceAccess: interface{},
	ResourceAppId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAccess">ResourceAccess</a></code> | <code>interface{}</code> | resource_access block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAppId">ResourceAppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#resource_app_id Application#resource_app_id}. |

---

##### `ResourceAccess`<sup>Required</sup> <a name="ResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAccess"></a>

```go
ResourceAccess interface{}
```

- *Type:* interface{}

resource_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#resource_access Application#resource_access}

---

##### `ResourceAppId`<sup>Required</sup> <a name="ResourceAppId" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccess.property.resourceAppId"></a>

```go
ResourceAppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#resource_app_id Application#resource_app_id}.

---

### ApplicationRequiredResourceAccessResourceAccess <a name="ApplicationRequiredResourceAccessResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

&application.ApplicationRequiredResourceAccessResourceAccess {
	Id: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#id Application#id}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#type Application#type}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#id Application#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccess.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#type Application#type}.

---

### ApplicationSinglePageApplication <a name="ApplicationSinglePageApplication" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

&application.ApplicationSinglePageApplication {
	RedirectUris: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. |

---

##### `RedirectUris`<sup>Optional</sup> <a name="RedirectUris" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplication.property.redirectUris"></a>

```go
RedirectUris *[]*string
```

- *Type:* *[]*string

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#redirect_uris Application#redirect_uris}

---

### ApplicationTimeouts <a name="ApplicationTimeouts" id="@cdktf/provider-azuread.application.ApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

&application.ApplicationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#create Application#create}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#delete Application#delete}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#read Application#read}. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#update Application#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#create Application#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#delete Application#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#read Application#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.application.ApplicationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#update Application#update}.

---

### ApplicationWeb <a name="ApplicationWeb" id="@cdktf/provider-azuread.application.ApplicationWeb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationWeb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

&application.ApplicationWeb {
	HomepageUrl: *string,
	ImplicitGrant: github.com/cdktf/cdktf-provider-azuread-go/azuread.application.ApplicationWebImplicitGrant,
	LogoutUrl: *string,
	RedirectUris: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.homepageUrl">HomepageUrl</a></code> | <code>*string</code> | Home page or landing page of the application. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.implicitGrant">ImplicitGrant</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a></code> | implicit_grant block. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.logoutUrl">LogoutUrl</a></code> | <code>*string</code> | The URL that will be used by Microsoft's authorization service to sign out a user using front-channel, back-channel or SAML logout protocols. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent. |

---

##### `HomepageUrl`<sup>Optional</sup> <a name="HomepageUrl" id="@cdktf/provider-azuread.application.ApplicationWeb.property.homepageUrl"></a>

```go
HomepageUrl *string
```

- *Type:* *string

Home page or landing page of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#homepage_url Application#homepage_url}

---

##### `ImplicitGrant`<sup>Optional</sup> <a name="ImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWeb.property.implicitGrant"></a>

```go
ImplicitGrant ApplicationWebImplicitGrant
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

implicit_grant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#implicit_grant Application#implicit_grant}

---

##### `LogoutUrl`<sup>Optional</sup> <a name="LogoutUrl" id="@cdktf/provider-azuread.application.ApplicationWeb.property.logoutUrl"></a>

```go
LogoutUrl *string
```

- *Type:* *string

The URL that will be used by Microsoft's authorization service to sign out a user using front-channel, back-channel or SAML logout protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#logout_url Application#logout_url}

---

##### `RedirectUris`<sup>Optional</sup> <a name="RedirectUris" id="@cdktf/provider-azuread.application.ApplicationWeb.property.redirectUris"></a>

```go
RedirectUris *[]*string
```

- *Type:* *[]*string

The URLs where user tokens are sent for sign-in, or the redirect URIs where OAuth 2.0 authorization codes and access tokens are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#redirect_uris Application#redirect_uris}

---

### ApplicationWebImplicitGrant <a name="ApplicationWebImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

&application.ApplicationWebImplicitGrant {
	AccessTokenIssuanceEnabled: interface{},
	IdTokenIssuanceEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.accessTokenIssuanceEnabled">AccessTokenIssuanceEnabled</a></code> | <code>interface{}</code> | Whether this web application can request an access token using OAuth 2.0 implicit flow. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.idTokenIssuanceEnabled">IdTokenIssuanceEnabled</a></code> | <code>interface{}</code> | Whether this web application can request an ID token using OAuth 2.0 implicit flow. |

---

##### `AccessTokenIssuanceEnabled`<sup>Optional</sup> <a name="AccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.accessTokenIssuanceEnabled"></a>

```go
AccessTokenIssuanceEnabled interface{}
```

- *Type:* interface{}

Whether this web application can request an access token using OAuth 2.0 implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#access_token_issuance_enabled Application#access_token_issuance_enabled}

---

##### `IdTokenIssuanceEnabled`<sup>Optional</sup> <a name="IdTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrant.property.idTokenIssuanceEnabled"></a>

```go
IdTokenIssuanceEnabled interface{}
```

- *Type:* interface{}

Whether this web application can request an ID token using OAuth 2.0 implicit flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.39.0/docs/resources/application#id_token_issuance_enabled Application#id_token_issuance_enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationApiOauth2PermissionScopeList <a name="ApplicationApiOauth2PermissionScopeList" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationApiOauth2PermissionScopeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApplicationApiOauth2PermissionScopeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.get"></a>

```go
func Get(index *f64) ApplicationApiOauth2PermissionScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationApiOauth2PermissionScopeOutputReference <a name="ApplicationApiOauth2PermissionScopeOutputReference" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationApiOauth2PermissionScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApplicationApiOauth2PermissionScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDescription">ResetAdminConsentDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDisplayName">ResetAdminConsentDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDescription">ResetUserConsentDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDisplayName">ResetUserConsentDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminConsentDescription` <a name="ResetAdminConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDescription"></a>

```go
func ResetAdminConsentDescription()
```

##### `ResetAdminConsentDisplayName` <a name="ResetAdminConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetAdminConsentDisplayName"></a>

```go
func ResetAdminConsentDisplayName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUserConsentDescription` <a name="ResetUserConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDescription"></a>

```go
func ResetUserConsentDescription()
```

##### `ResetUserConsentDisplayName` <a name="ResetUserConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetUserConsentDisplayName"></a>

```go
func ResetUserConsentDisplayName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescriptionInput">AdminConsentDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayNameInput">AdminConsentDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescriptionInput">UserConsentDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayNameInput">UserConsentDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescription">AdminConsentDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayName">AdminConsentDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescription">UserConsentDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayName">UserConsentDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminConsentDescriptionInput`<sup>Optional</sup> <a name="AdminConsentDescriptionInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescriptionInput"></a>

```go
func AdminConsentDescriptionInput() *string
```

- *Type:* *string

---

##### `AdminConsentDisplayNameInput`<sup>Optional</sup> <a name="AdminConsentDisplayNameInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayNameInput"></a>

```go
func AdminConsentDisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserConsentDescriptionInput`<sup>Optional</sup> <a name="UserConsentDescriptionInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescriptionInput"></a>

```go
func UserConsentDescriptionInput() *string
```

- *Type:* *string

---

##### `UserConsentDisplayNameInput`<sup>Optional</sup> <a name="UserConsentDisplayNameInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayNameInput"></a>

```go
func UserConsentDisplayNameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `AdminConsentDescription`<sup>Required</sup> <a name="AdminConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDescription"></a>

```go
func AdminConsentDescription() *string
```

- *Type:* *string

---

##### `AdminConsentDisplayName`<sup>Required</sup> <a name="AdminConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.adminConsentDisplayName"></a>

```go
func AdminConsentDisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserConsentDescription`<sup>Required</sup> <a name="UserConsentDescription" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDescription"></a>

```go
func UserConsentDescription() *string
```

- *Type:* *string

---

##### `UserConsentDisplayName`<sup>Required</sup> <a name="UserConsentDisplayName" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.userConsentDisplayName"></a>

```go
func UserConsentDisplayName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationApiOutputReference <a name="ApplicationApiOutputReference" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationApiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationApiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.putOauth2PermissionScope">PutOauth2PermissionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetKnownClientApplications">ResetKnownClientApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetMappedClaimsEnabled">ResetMappedClaimsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetOauth2PermissionScope">ResetOauth2PermissionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetRequestedAccessTokenVersion">ResetRequestedAccessTokenVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauth2PermissionScope` <a name="PutOauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.putOauth2PermissionScope"></a>

```go
func PutOauth2PermissionScope(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.putOauth2PermissionScope.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetKnownClientApplications` <a name="ResetKnownClientApplications" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetKnownClientApplications"></a>

```go
func ResetKnownClientApplications()
```

##### `ResetMappedClaimsEnabled` <a name="ResetMappedClaimsEnabled" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetMappedClaimsEnabled"></a>

```go
func ResetMappedClaimsEnabled()
```

##### `ResetOauth2PermissionScope` <a name="ResetOauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetOauth2PermissionScope"></a>

```go
func ResetOauth2PermissionScope()
```

##### `ResetRequestedAccessTokenVersion` <a name="ResetRequestedAccessTokenVersion" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.resetRequestedAccessTokenVersion"></a>

```go
func ResetRequestedAccessTokenVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScope">Oauth2PermissionScope</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList">ApplicationApiOauth2PermissionScopeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplicationsInput">KnownClientApplicationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabledInput">MappedClaimsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScopeInput">Oauth2PermissionScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersionInput">RequestedAccessTokenVersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplications">KnownClientApplications</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabled">MappedClaimsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersion">RequestedAccessTokenVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Oauth2PermissionScope`<sup>Required</sup> <a name="Oauth2PermissionScope" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScope"></a>

```go
func Oauth2PermissionScope() ApplicationApiOauth2PermissionScopeList
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApiOauth2PermissionScopeList">ApplicationApiOauth2PermissionScopeList</a>

---

##### `KnownClientApplicationsInput`<sup>Optional</sup> <a name="KnownClientApplicationsInput" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplicationsInput"></a>

```go
func KnownClientApplicationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MappedClaimsEnabledInput`<sup>Optional</sup> <a name="MappedClaimsEnabledInput" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabledInput"></a>

```go
func MappedClaimsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Oauth2PermissionScopeInput`<sup>Optional</sup> <a name="Oauth2PermissionScopeInput" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.oauth2PermissionScopeInput"></a>

```go
func Oauth2PermissionScopeInput() interface{}
```

- *Type:* interface{}

---

##### `RequestedAccessTokenVersionInput`<sup>Optional</sup> <a name="RequestedAccessTokenVersionInput" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersionInput"></a>

```go
func RequestedAccessTokenVersionInput() *f64
```

- *Type:* *f64

---

##### `KnownClientApplications`<sup>Required</sup> <a name="KnownClientApplications" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.knownClientApplications"></a>

```go
func KnownClientApplications() *[]*string
```

- *Type:* *[]*string

---

##### `MappedClaimsEnabled`<sup>Required</sup> <a name="MappedClaimsEnabled" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.mappedClaimsEnabled"></a>

```go
func MappedClaimsEnabled() interface{}
```

- *Type:* interface{}

---

##### `RequestedAccessTokenVersion`<sup>Required</sup> <a name="RequestedAccessTokenVersion" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.requestedAccessTokenVersion"></a>

```go
func RequestedAccessTokenVersion() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationApiOutputReference.property.internalValue"></a>

```go
func InternalValue() ApplicationApi
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationApi">ApplicationApi</a>

---


### ApplicationAppRoleList <a name="ApplicationAppRoleList" id="@cdktf/provider-azuread.application.ApplicationAppRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationAppRoleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApplicationAppRoleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.get"></a>

```go
func Get(index *f64) ApplicationAppRoleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationAppRoleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationAppRoleOutputReference <a name="ApplicationAppRoleOutputReference" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationAppRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApplicationAppRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypesInput">AllowedMemberTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypes">AllowedMemberTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedMemberTypesInput`<sup>Optional</sup> <a name="AllowedMemberTypesInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypesInput"></a>

```go
func AllowedMemberTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `AllowedMemberTypes`<sup>Required</sup> <a name="AllowedMemberTypes" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.allowedMemberTypes"></a>

```go
func AllowedMemberTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationAppRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationFeatureTagsList <a name="ApplicationFeatureTagsList" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationFeatureTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApplicationFeatureTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.get"></a>

```go
func Get(index *f64) ApplicationFeatureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationFeatureTagsOutputReference <a name="ApplicationFeatureTagsOutputReference" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationFeatureTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApplicationFeatureTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetCustomSingleSignOn">ResetCustomSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetEnterprise">ResetEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetGallery">ResetGallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetHide">ResetHide</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomSingleSignOn` <a name="ResetCustomSingleSignOn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetCustomSingleSignOn"></a>

```go
func ResetCustomSingleSignOn()
```

##### `ResetEnterprise` <a name="ResetEnterprise" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetEnterprise"></a>

```go
func ResetEnterprise()
```

##### `ResetGallery` <a name="ResetGallery" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetGallery"></a>

```go
func ResetGallery()
```

##### `ResetHide` <a name="ResetHide" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.resetHide"></a>

```go
func ResetHide()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOnInput">CustomSingleSignOnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterpriseInput">EnterpriseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.galleryInput">GalleryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hideInput">HideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOn">CustomSingleSignOn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterprise">Enterprise</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.gallery">Gallery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hide">Hide</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomSingleSignOnInput`<sup>Optional</sup> <a name="CustomSingleSignOnInput" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOnInput"></a>

```go
func CustomSingleSignOnInput() interface{}
```

- *Type:* interface{}

---

##### `EnterpriseInput`<sup>Optional</sup> <a name="EnterpriseInput" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterpriseInput"></a>

```go
func EnterpriseInput() interface{}
```

- *Type:* interface{}

---

##### `GalleryInput`<sup>Optional</sup> <a name="GalleryInput" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.galleryInput"></a>

```go
func GalleryInput() interface{}
```

- *Type:* interface{}

---

##### `HideInput`<sup>Optional</sup> <a name="HideInput" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hideInput"></a>

```go
func HideInput() interface{}
```

- *Type:* interface{}

---

##### `CustomSingleSignOn`<sup>Required</sup> <a name="CustomSingleSignOn" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.customSingleSignOn"></a>

```go
func CustomSingleSignOn() interface{}
```

- *Type:* interface{}

---

##### `Enterprise`<sup>Required</sup> <a name="Enterprise" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.enterprise"></a>

```go
func Enterprise() interface{}
```

- *Type:* interface{}

---

##### `Gallery`<sup>Required</sup> <a name="Gallery" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.gallery"></a>

```go
func Gallery() interface{}
```

- *Type:* interface{}

---

##### `Hide`<sup>Required</sup> <a name="Hide" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.hide"></a>

```go
func Hide() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationFeatureTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationOptionalClaimsAccessTokenList <a name="ApplicationOptionalClaimsAccessTokenList" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationOptionalClaimsAccessTokenList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApplicationOptionalClaimsAccessTokenList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.get"></a>

```go
func Get(index *f64) ApplicationOptionalClaimsAccessTokenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationOptionalClaimsAccessTokenOutputReference <a name="ApplicationOptionalClaimsAccessTokenOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationOptionalClaimsAccessTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApplicationOptionalClaimsAccessTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetEssential">ResetEssential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetAdditionalProperties"></a>

```go
func ResetAdditionalProperties()
```

##### `ResetEssential` <a name="ResetEssential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetEssential"></a>

```go
func ResetEssential()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essentialInput">EssentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essential">Essential</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalPropertiesInput"></a>

```go
func AdditionalPropertiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EssentialInput`<sup>Optional</sup> <a name="EssentialInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essentialInput"></a>

```go
func EssentialInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.additionalProperties"></a>

```go
func AdditionalProperties() *[]*string
```

- *Type:* *[]*string

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.essential"></a>

```go
func Essential() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationOptionalClaimsIdTokenList <a name="ApplicationOptionalClaimsIdTokenList" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationOptionalClaimsIdTokenList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApplicationOptionalClaimsIdTokenList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.get"></a>

```go
func Get(index *f64) ApplicationOptionalClaimsIdTokenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationOptionalClaimsIdTokenOutputReference <a name="ApplicationOptionalClaimsIdTokenOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationOptionalClaimsIdTokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApplicationOptionalClaimsIdTokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetEssential">ResetEssential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetAdditionalProperties"></a>

```go
func ResetAdditionalProperties()
```

##### `ResetEssential` <a name="ResetEssential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetEssential"></a>

```go
func ResetEssential()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essentialInput">EssentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essential">Essential</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalPropertiesInput"></a>

```go
func AdditionalPropertiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EssentialInput`<sup>Optional</sup> <a name="EssentialInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essentialInput"></a>

```go
func EssentialInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.additionalProperties"></a>

```go
func AdditionalProperties() *[]*string
```

- *Type:* *[]*string

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.essential"></a>

```go
func Essential() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationOptionalClaimsOutputReference <a name="ApplicationOptionalClaimsOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationOptionalClaimsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationOptionalClaimsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putAccessToken">PutAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putIdToken">PutIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putSaml2Token">PutSaml2Token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetIdToken">ResetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetSaml2Token">ResetSaml2Token</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessToken` <a name="PutAccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putAccessToken"></a>

```go
func PutAccessToken(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putAccessToken.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIdToken` <a name="PutIdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putIdToken"></a>

```go
func PutIdToken(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putIdToken.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSaml2Token` <a name="PutSaml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putSaml2Token"></a>

```go
func PutSaml2Token(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.putSaml2Token.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetAccessToken"></a>

```go
func ResetAccessToken()
```

##### `ResetIdToken` <a name="ResetIdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetIdToken"></a>

```go
func ResetIdToken()
```

##### `ResetSaml2Token` <a name="ResetSaml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.resetSaml2Token"></a>

```go
func ResetSaml2Token()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessToken">AccessToken</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList">ApplicationOptionalClaimsAccessTokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idToken">IdToken</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList">ApplicationOptionalClaimsIdTokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2Token">Saml2Token</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList">ApplicationOptionalClaimsSaml2TokenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idTokenInput">IdTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2TokenInput">Saml2TokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessToken"></a>

```go
func AccessToken() ApplicationOptionalClaimsAccessTokenList
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsAccessTokenList">ApplicationOptionalClaimsAccessTokenList</a>

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idToken"></a>

```go
func IdToken() ApplicationOptionalClaimsIdTokenList
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsIdTokenList">ApplicationOptionalClaimsIdTokenList</a>

---

##### `Saml2Token`<sup>Required</sup> <a name="Saml2Token" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2Token"></a>

```go
func Saml2Token() ApplicationOptionalClaimsSaml2TokenList
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList">ApplicationOptionalClaimsSaml2TokenList</a>

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.accessTokenInput"></a>

```go
func AccessTokenInput() interface{}
```

- *Type:* interface{}

---

##### `IdTokenInput`<sup>Optional</sup> <a name="IdTokenInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.idTokenInput"></a>

```go
func IdTokenInput() interface{}
```

- *Type:* interface{}

---

##### `Saml2TokenInput`<sup>Optional</sup> <a name="Saml2TokenInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.saml2TokenInput"></a>

```go
func Saml2TokenInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApplicationOptionalClaims
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaims">ApplicationOptionalClaims</a>

---


### ApplicationOptionalClaimsSaml2TokenList <a name="ApplicationOptionalClaimsSaml2TokenList" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationOptionalClaimsSaml2TokenList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApplicationOptionalClaimsSaml2TokenList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.get"></a>

```go
func Get(index *f64) ApplicationOptionalClaimsSaml2TokenOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationOptionalClaimsSaml2TokenOutputReference <a name="ApplicationOptionalClaimsSaml2TokenOutputReference" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationOptionalClaimsSaml2TokenOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApplicationOptionalClaimsSaml2TokenOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetEssential">ResetEssential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetAdditionalProperties"></a>

```go
func ResetAdditionalProperties()
```

##### `ResetEssential` <a name="ResetEssential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetEssential"></a>

```go
func ResetEssential()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essentialInput">EssentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalProperties">AdditionalProperties</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essential">Essential</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalPropertiesInput"></a>

```go
func AdditionalPropertiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EssentialInput`<sup>Optional</sup> <a name="EssentialInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essentialInput"></a>

```go
func EssentialInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.additionalProperties"></a>

```go
func AdditionalProperties() *[]*string
```

- *Type:* *[]*string

---

##### `Essential`<sup>Required</sup> <a name="Essential" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.essential"></a>

```go
func Essential() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationOptionalClaimsSaml2TokenOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationPublicClientOutputReference <a name="ApplicationPublicClientOutputReference" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationPublicClientOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationPublicClientOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resetRedirectUris">ResetRedirectUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRedirectUris` <a name="ResetRedirectUris" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.resetRedirectUris"></a>

```go
func ResetRedirectUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUrisInput"></a>

```go
func RedirectUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.redirectUris"></a>

```go
func RedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationPublicClientOutputReference.property.internalValue"></a>

```go
func InternalValue() ApplicationPublicClient
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationPublicClient">ApplicationPublicClient</a>

---


### ApplicationRequiredResourceAccessList <a name="ApplicationRequiredResourceAccessList" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationRequiredResourceAccessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApplicationRequiredResourceAccessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.get"></a>

```go
func Get(index *f64) ApplicationRequiredResourceAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationRequiredResourceAccessOutputReference <a name="ApplicationRequiredResourceAccessOutputReference" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationRequiredResourceAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApplicationRequiredResourceAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.putResourceAccess">PutResourceAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceAccess` <a name="PutResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.putResourceAccess"></a>

```go
func PutResourceAccess(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.putResourceAccess.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccess">ResourceAccess</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList">ApplicationRequiredResourceAccessResourceAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccessInput">ResourceAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppIdInput">ResourceAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppId">ResourceAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceAccess`<sup>Required</sup> <a name="ResourceAccess" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccess"></a>

```go
func ResourceAccess() ApplicationRequiredResourceAccessResourceAccessList
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList">ApplicationRequiredResourceAccessResourceAccessList</a>

---

##### `ResourceAccessInput`<sup>Optional</sup> <a name="ResourceAccessInput" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAccessInput"></a>

```go
func ResourceAccessInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceAppIdInput`<sup>Optional</sup> <a name="ResourceAppIdInput" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppIdInput"></a>

```go
func ResourceAppIdInput() *string
```

- *Type:* *string

---

##### `ResourceAppId`<sup>Required</sup> <a name="ResourceAppId" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.resourceAppId"></a>

```go
func ResourceAppId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationRequiredResourceAccessResourceAccessList <a name="ApplicationRequiredResourceAccessResourceAccessList" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationRequiredResourceAccessResourceAccessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApplicationRequiredResourceAccessResourceAccessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.get"></a>

```go
func Get(index *f64) ApplicationRequiredResourceAccessResourceAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationRequiredResourceAccessResourceAccessOutputReference <a name="ApplicationRequiredResourceAccessResourceAccessOutputReference" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationRequiredResourceAccessResourceAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApplicationRequiredResourceAccessResourceAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationRequiredResourceAccessResourceAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationSinglePageApplicationOutputReference <a name="ApplicationSinglePageApplicationOutputReference" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationSinglePageApplicationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationSinglePageApplicationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resetRedirectUris">ResetRedirectUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRedirectUris` <a name="ResetRedirectUris" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.resetRedirectUris"></a>

```go
func ResetRedirectUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUrisInput"></a>

```go
func RedirectUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.redirectUris"></a>

```go
func RedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationSinglePageApplicationOutputReference.property.internalValue"></a>

```go
func InternalValue() ApplicationSinglePageApplication
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationSinglePageApplication">ApplicationSinglePageApplication</a>

---


### ApplicationTimeoutsOutputReference <a name="ApplicationTimeoutsOutputReference" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApplicationWebImplicitGrantOutputReference <a name="ApplicationWebImplicitGrantOutputReference" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationWebImplicitGrantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationWebImplicitGrantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetAccessTokenIssuanceEnabled">ResetAccessTokenIssuanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetIdTokenIssuanceEnabled">ResetIdTokenIssuanceEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessTokenIssuanceEnabled` <a name="ResetAccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetAccessTokenIssuanceEnabled"></a>

```go
func ResetAccessTokenIssuanceEnabled()
```

##### `ResetIdTokenIssuanceEnabled` <a name="ResetIdTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.resetIdTokenIssuanceEnabled"></a>

```go
func ResetIdTokenIssuanceEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabledInput">AccessTokenIssuanceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabledInput">IdTokenIssuanceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabled">AccessTokenIssuanceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabled">IdTokenIssuanceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTokenIssuanceEnabledInput`<sup>Optional</sup> <a name="AccessTokenIssuanceEnabledInput" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabledInput"></a>

```go
func AccessTokenIssuanceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdTokenIssuanceEnabledInput`<sup>Optional</sup> <a name="IdTokenIssuanceEnabledInput" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabledInput"></a>

```go
func IdTokenIssuanceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AccessTokenIssuanceEnabled`<sup>Required</sup> <a name="AccessTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.accessTokenIssuanceEnabled"></a>

```go
func AccessTokenIssuanceEnabled() interface{}
```

- *Type:* interface{}

---

##### `IdTokenIssuanceEnabled`<sup>Required</sup> <a name="IdTokenIssuanceEnabled" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.idTokenIssuanceEnabled"></a>

```go
func IdTokenIssuanceEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference.property.internalValue"></a>

```go
func InternalValue() ApplicationWebImplicitGrant
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

---


### ApplicationWebOutputReference <a name="ApplicationWebOutputReference" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/application"

application.NewApplicationWebOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApplicationWebOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.putImplicitGrant">PutImplicitGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetHomepageUrl">ResetHomepageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetImplicitGrant">ResetImplicitGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetLogoutUrl">ResetLogoutUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetRedirectUris">ResetRedirectUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImplicitGrant` <a name="PutImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.putImplicitGrant"></a>

```go
func PutImplicitGrant(value ApplicationWebImplicitGrant)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.putImplicitGrant.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

---

##### `ResetHomepageUrl` <a name="ResetHomepageUrl" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetHomepageUrl"></a>

```go
func ResetHomepageUrl()
```

##### `ResetImplicitGrant` <a name="ResetImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetImplicitGrant"></a>

```go
func ResetImplicitGrant()
```

##### `ResetLogoutUrl` <a name="ResetLogoutUrl" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetLogoutUrl"></a>

```go
func ResetLogoutUrl()
```

##### `ResetRedirectUris` <a name="ResetRedirectUris" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.resetRedirectUris"></a>

```go
func ResetRedirectUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrant">ImplicitGrant</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference">ApplicationWebImplicitGrantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrlInput">HomepageUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrantInput">ImplicitGrantInput</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrlInput">LogoutUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrl">HomepageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrl">LogoutUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImplicitGrant`<sup>Required</sup> <a name="ImplicitGrant" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrant"></a>

```go
func ImplicitGrant() ApplicationWebImplicitGrantOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrantOutputReference">ApplicationWebImplicitGrantOutputReference</a>

---

##### `HomepageUrlInput`<sup>Optional</sup> <a name="HomepageUrlInput" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrlInput"></a>

```go
func HomepageUrlInput() *string
```

- *Type:* *string

---

##### `ImplicitGrantInput`<sup>Optional</sup> <a name="ImplicitGrantInput" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.implicitGrantInput"></a>

```go
func ImplicitGrantInput() ApplicationWebImplicitGrant
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWebImplicitGrant">ApplicationWebImplicitGrant</a>

---

##### `LogoutUrlInput`<sup>Optional</sup> <a name="LogoutUrlInput" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrlInput"></a>

```go
func LogoutUrlInput() *string
```

- *Type:* *string

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUrisInput"></a>

```go
func RedirectUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `HomepageUrl`<sup>Required</sup> <a name="HomepageUrl" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.homepageUrl"></a>

```go
func HomepageUrl() *string
```

- *Type:* *string

---

##### `LogoutUrl`<sup>Required</sup> <a name="LogoutUrl" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.logoutUrl"></a>

```go
func LogoutUrl() *string
```

- *Type:* *string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.redirectUris"></a>

```go
func RedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.application.ApplicationWebOutputReference.property.internalValue"></a>

```go
func InternalValue() ApplicationWeb
```

- *Type:* <a href="#@cdktf/provider-azuread.application.ApplicationWeb">ApplicationWeb</a>

---



