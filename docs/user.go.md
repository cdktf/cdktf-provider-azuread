# `azuread_user`

Refer to the Terraform Registory for docs: [`azuread_user`](https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user).

# `user` Submodule <a name="`user` Submodule" id="@cdktf/provider-azuread.user"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### User <a name="User" id="@cdktf/provider-azuread.user.User"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user azuread_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.user.User.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/user"

user.NewUser(scope Construct, id *string, config UserConfig) User
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.user.User.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.user.UserConfig">UserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.user.User.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.user.User.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.user.User.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.user.UserConfig">UserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.user.User.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.user.User.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.user.User.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.user.User.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.user.User.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetAccountEnabled">ResetAccountEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetAgeGroup">ResetAgeGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetBusinessPhones">ResetBusinessPhones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCompanyName">ResetCompanyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetConsentProvidedForMinor">ResetConsentProvidedForMinor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCostCenter">ResetCostCenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDepartment">ResetDepartment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDisablePasswordExpiration">ResetDisablePasswordExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDisableStrongPassword">ResetDisableStrongPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetDivision">ResetDivision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetEmployeeId">ResetEmployeeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetEmployeeType">ResetEmployeeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetFaxNumber">ResetFaxNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetForcePasswordChange">ResetForcePasswordChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetGivenName">ResetGivenName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetJobTitle">ResetJobTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetMail">ResetMail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetMailNickname">ResetMailNickname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetManagerId">ResetManagerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetMobilePhone">ResetMobilePhone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOfficeLocation">ResetOfficeLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOnpremisesImmutableId">ResetOnpremisesImmutableId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetOtherMails">ResetOtherMails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetPreferredLanguage">ResetPreferredLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetShowInAddressList">ResetShowInAddressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetStreetAddress">ResetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetSurname">ResetSurname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.resetUsageLocation">ResetUsageLocation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.user.User.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.user.User.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.user.User.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.user.User.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.user.User.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.user.User.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.user.User.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.user.User.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.user.User.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.user.User.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.user.User.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.user.User.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.user.User.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.user.User.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.user.User.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.user.User.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.user.User.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.user.User.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.user.User.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.user.User.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.user.User.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.user.User.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.user.User.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.user.User.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.User.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.user.User.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.user.User.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.user.User.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.user.User.putTimeouts"></a>

```go
func PutTimeouts(value UserTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.user.User.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>

---

##### `ResetAccountEnabled` <a name="ResetAccountEnabled" id="@cdktf/provider-azuread.user.User.resetAccountEnabled"></a>

```go
func ResetAccountEnabled()
```

##### `ResetAgeGroup` <a name="ResetAgeGroup" id="@cdktf/provider-azuread.user.User.resetAgeGroup"></a>

```go
func ResetAgeGroup()
```

##### `ResetBusinessPhones` <a name="ResetBusinessPhones" id="@cdktf/provider-azuread.user.User.resetBusinessPhones"></a>

```go
func ResetBusinessPhones()
```

##### `ResetCity` <a name="ResetCity" id="@cdktf/provider-azuread.user.User.resetCity"></a>

```go
func ResetCity()
```

##### `ResetCompanyName` <a name="ResetCompanyName" id="@cdktf/provider-azuread.user.User.resetCompanyName"></a>

```go
func ResetCompanyName()
```

##### `ResetConsentProvidedForMinor` <a name="ResetConsentProvidedForMinor" id="@cdktf/provider-azuread.user.User.resetConsentProvidedForMinor"></a>

```go
func ResetConsentProvidedForMinor()
```

##### `ResetCostCenter` <a name="ResetCostCenter" id="@cdktf/provider-azuread.user.User.resetCostCenter"></a>

```go
func ResetCostCenter()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktf/provider-azuread.user.User.resetCountry"></a>

```go
func ResetCountry()
```

##### `ResetDepartment` <a name="ResetDepartment" id="@cdktf/provider-azuread.user.User.resetDepartment"></a>

```go
func ResetDepartment()
```

##### `ResetDisablePasswordExpiration` <a name="ResetDisablePasswordExpiration" id="@cdktf/provider-azuread.user.User.resetDisablePasswordExpiration"></a>

```go
func ResetDisablePasswordExpiration()
```

##### `ResetDisableStrongPassword` <a name="ResetDisableStrongPassword" id="@cdktf/provider-azuread.user.User.resetDisableStrongPassword"></a>

```go
func ResetDisableStrongPassword()
```

##### `ResetDivision` <a name="ResetDivision" id="@cdktf/provider-azuread.user.User.resetDivision"></a>

```go
func ResetDivision()
```

##### `ResetEmployeeId` <a name="ResetEmployeeId" id="@cdktf/provider-azuread.user.User.resetEmployeeId"></a>

```go
func ResetEmployeeId()
```

##### `ResetEmployeeType` <a name="ResetEmployeeType" id="@cdktf/provider-azuread.user.User.resetEmployeeType"></a>

```go
func ResetEmployeeType()
```

##### `ResetFaxNumber` <a name="ResetFaxNumber" id="@cdktf/provider-azuread.user.User.resetFaxNumber"></a>

```go
func ResetFaxNumber()
```

##### `ResetForcePasswordChange` <a name="ResetForcePasswordChange" id="@cdktf/provider-azuread.user.User.resetForcePasswordChange"></a>

```go
func ResetForcePasswordChange()
```

##### `ResetGivenName` <a name="ResetGivenName" id="@cdktf/provider-azuread.user.User.resetGivenName"></a>

```go
func ResetGivenName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.user.User.resetId"></a>

```go
func ResetId()
```

##### `ResetJobTitle` <a name="ResetJobTitle" id="@cdktf/provider-azuread.user.User.resetJobTitle"></a>

```go
func ResetJobTitle()
```

##### `ResetMail` <a name="ResetMail" id="@cdktf/provider-azuread.user.User.resetMail"></a>

```go
func ResetMail()
```

##### `ResetMailNickname` <a name="ResetMailNickname" id="@cdktf/provider-azuread.user.User.resetMailNickname"></a>

```go
func ResetMailNickname()
```

##### `ResetManagerId` <a name="ResetManagerId" id="@cdktf/provider-azuread.user.User.resetManagerId"></a>

```go
func ResetManagerId()
```

##### `ResetMobilePhone` <a name="ResetMobilePhone" id="@cdktf/provider-azuread.user.User.resetMobilePhone"></a>

```go
func ResetMobilePhone()
```

##### `ResetOfficeLocation` <a name="ResetOfficeLocation" id="@cdktf/provider-azuread.user.User.resetOfficeLocation"></a>

```go
func ResetOfficeLocation()
```

##### `ResetOnpremisesImmutableId` <a name="ResetOnpremisesImmutableId" id="@cdktf/provider-azuread.user.User.resetOnpremisesImmutableId"></a>

```go
func ResetOnpremisesImmutableId()
```

##### `ResetOtherMails` <a name="ResetOtherMails" id="@cdktf/provider-azuread.user.User.resetOtherMails"></a>

```go
func ResetOtherMails()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-azuread.user.User.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-azuread.user.User.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetPreferredLanguage` <a name="ResetPreferredLanguage" id="@cdktf/provider-azuread.user.User.resetPreferredLanguage"></a>

```go
func ResetPreferredLanguage()
```

##### `ResetShowInAddressList` <a name="ResetShowInAddressList" id="@cdktf/provider-azuread.user.User.resetShowInAddressList"></a>

```go
func ResetShowInAddressList()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-azuread.user.User.resetState"></a>

```go
func ResetState()
```

##### `ResetStreetAddress` <a name="ResetStreetAddress" id="@cdktf/provider-azuread.user.User.resetStreetAddress"></a>

```go
func ResetStreetAddress()
```

##### `ResetSurname` <a name="ResetSurname" id="@cdktf/provider-azuread.user.User.resetSurname"></a>

```go
func ResetSurname()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.user.User.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUsageLocation` <a name="ResetUsageLocation" id="@cdktf/provider-azuread.user.User.resetUsageLocation"></a>

```go
func ResetUsageLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.user.User.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.user.User.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/user"

user.User_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.user.User.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.user.User.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/user"

user.User_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.user.User.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.user.User.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/user"

user.User_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.user.User.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.user.User.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/user"

user.User_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.user.User.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.user.User.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the User to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.user.User.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing User that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.user.User.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the User to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.user.User.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.aboutMe">AboutMe</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.creationType">CreationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.externalUserState">ExternalUserState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.imAddresses">ImAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesDistinguishedName">OnpremisesDistinguishedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesDomainName">OnpremisesDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesSamAccountName">OnpremisesSamAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesSecurityIdentifier">OnpremisesSecurityIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesSyncEnabled">OnpremisesSyncEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesUserPrincipalName">OnpremisesUserPrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.proxyAddresses">ProxyAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.userType">UserType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.accountEnabledInput">AccountEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.ageGroupInput">AgeGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.businessPhonesInput">BusinessPhonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.companyNameInput">CompanyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.consentProvidedForMinorInput">ConsentProvidedForMinorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.costCenterInput">CostCenterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.departmentInput">DepartmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disablePasswordExpirationInput">DisablePasswordExpirationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disableStrongPasswordInput">DisableStrongPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.divisionInput">DivisionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeIdInput">EmployeeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeTypeInput">EmployeeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.faxNumberInput">FaxNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.forcePasswordChangeInput">ForcePasswordChangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.givenNameInput">GivenNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.jobTitleInput">JobTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mailInput">MailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mailNicknameInput">MailNicknameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.managerIdInput">ManagerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mobilePhoneInput">MobilePhoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.officeLocationInput">OfficeLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesImmutableIdInput">OnpremisesImmutableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.otherMailsInput">OtherMailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.preferredLanguageInput">PreferredLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.showInAddressListInput">ShowInAddressListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.streetAddressInput">StreetAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.surnameInput">SurnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.usageLocationInput">UsageLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.userPrincipalNameInput">UserPrincipalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.accountEnabled">AccountEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.ageGroup">AgeGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.businessPhones">BusinessPhones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.companyName">CompanyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.consentProvidedForMinor">ConsentProvidedForMinor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.costCenter">CostCenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.department">Department</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disablePasswordExpiration">DisablePasswordExpiration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.disableStrongPassword">DisableStrongPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.division">Division</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeId">EmployeeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.employeeType">EmployeeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.faxNumber">FaxNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.forcePasswordChange">ForcePasswordChange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.givenName">GivenName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.jobTitle">JobTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mail">Mail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mailNickname">MailNickname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.managerId">ManagerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.mobilePhone">MobilePhone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.officeLocation">OfficeLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.onpremisesImmutableId">OnpremisesImmutableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.otherMails">OtherMails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.showInAddressList">ShowInAddressList</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.streetAddress">StreetAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.surname">Surname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.usageLocation">UsageLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.User.property.userPrincipalName">UserPrincipalName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.user.User.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.user.User.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.user.User.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.user.User.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.user.User.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.user.User.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.user.User.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.user.User.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.user.User.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.user.User.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.user.User.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.user.User.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.user.User.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.user.User.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AboutMe`<sup>Required</sup> <a name="AboutMe" id="@cdktf/provider-azuread.user.User.property.aboutMe"></a>

```go
func AboutMe() *string
```

- *Type:* *string

---

##### `CreationType`<sup>Required</sup> <a name="CreationType" id="@cdktf/provider-azuread.user.User.property.creationType"></a>

```go
func CreationType() *string
```

- *Type:* *string

---

##### `ExternalUserState`<sup>Required</sup> <a name="ExternalUserState" id="@cdktf/provider-azuread.user.User.property.externalUserState"></a>

```go
func ExternalUserState() *string
```

- *Type:* *string

---

##### `ImAddresses`<sup>Required</sup> <a name="ImAddresses" id="@cdktf/provider-azuread.user.User.property.imAddresses"></a>

```go
func ImAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.user.User.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `OnpremisesDistinguishedName`<sup>Required</sup> <a name="OnpremisesDistinguishedName" id="@cdktf/provider-azuread.user.User.property.onpremisesDistinguishedName"></a>

```go
func OnpremisesDistinguishedName() *string
```

- *Type:* *string

---

##### `OnpremisesDomainName`<sup>Required</sup> <a name="OnpremisesDomainName" id="@cdktf/provider-azuread.user.User.property.onpremisesDomainName"></a>

```go
func OnpremisesDomainName() *string
```

- *Type:* *string

---

##### `OnpremisesSamAccountName`<sup>Required</sup> <a name="OnpremisesSamAccountName" id="@cdktf/provider-azuread.user.User.property.onpremisesSamAccountName"></a>

```go
func OnpremisesSamAccountName() *string
```

- *Type:* *string

---

##### `OnpremisesSecurityIdentifier`<sup>Required</sup> <a name="OnpremisesSecurityIdentifier" id="@cdktf/provider-azuread.user.User.property.onpremisesSecurityIdentifier"></a>

```go
func OnpremisesSecurityIdentifier() *string
```

- *Type:* *string

---

##### `OnpremisesSyncEnabled`<sup>Required</sup> <a name="OnpremisesSyncEnabled" id="@cdktf/provider-azuread.user.User.property.onpremisesSyncEnabled"></a>

```go
func OnpremisesSyncEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OnpremisesUserPrincipalName`<sup>Required</sup> <a name="OnpremisesUserPrincipalName" id="@cdktf/provider-azuread.user.User.property.onpremisesUserPrincipalName"></a>

```go
func OnpremisesUserPrincipalName() *string
```

- *Type:* *string

---

##### `ProxyAddresses`<sup>Required</sup> <a name="ProxyAddresses" id="@cdktf/provider-azuread.user.User.property.proxyAddresses"></a>

```go
func ProxyAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.user.User.property.timeouts"></a>

```go
func Timeouts() UserTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference">UserTimeoutsOutputReference</a>

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-azuread.user.User.property.userType"></a>

```go
func UserType() *string
```

- *Type:* *string

---

##### `AccountEnabledInput`<sup>Optional</sup> <a name="AccountEnabledInput" id="@cdktf/provider-azuread.user.User.property.accountEnabledInput"></a>

```go
func AccountEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AgeGroupInput`<sup>Optional</sup> <a name="AgeGroupInput" id="@cdktf/provider-azuread.user.User.property.ageGroupInput"></a>

```go
func AgeGroupInput() *string
```

- *Type:* *string

---

##### `BusinessPhonesInput`<sup>Optional</sup> <a name="BusinessPhonesInput" id="@cdktf/provider-azuread.user.User.property.businessPhonesInput"></a>

```go
func BusinessPhonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktf/provider-azuread.user.User.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `CompanyNameInput`<sup>Optional</sup> <a name="CompanyNameInput" id="@cdktf/provider-azuread.user.User.property.companyNameInput"></a>

```go
func CompanyNameInput() *string
```

- *Type:* *string

---

##### `ConsentProvidedForMinorInput`<sup>Optional</sup> <a name="ConsentProvidedForMinorInput" id="@cdktf/provider-azuread.user.User.property.consentProvidedForMinorInput"></a>

```go
func ConsentProvidedForMinorInput() *string
```

- *Type:* *string

---

##### `CostCenterInput`<sup>Optional</sup> <a name="CostCenterInput" id="@cdktf/provider-azuread.user.User.property.costCenterInput"></a>

```go
func CostCenterInput() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktf/provider-azuread.user.User.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `DepartmentInput`<sup>Optional</sup> <a name="DepartmentInput" id="@cdktf/provider-azuread.user.User.property.departmentInput"></a>

```go
func DepartmentInput() *string
```

- *Type:* *string

---

##### `DisablePasswordExpirationInput`<sup>Optional</sup> <a name="DisablePasswordExpirationInput" id="@cdktf/provider-azuread.user.User.property.disablePasswordExpirationInput"></a>

```go
func DisablePasswordExpirationInput() interface{}
```

- *Type:* interface{}

---

##### `DisableStrongPasswordInput`<sup>Optional</sup> <a name="DisableStrongPasswordInput" id="@cdktf/provider-azuread.user.User.property.disableStrongPasswordInput"></a>

```go
func DisableStrongPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.user.User.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DivisionInput`<sup>Optional</sup> <a name="DivisionInput" id="@cdktf/provider-azuread.user.User.property.divisionInput"></a>

```go
func DivisionInput() *string
```

- *Type:* *string

---

##### `EmployeeIdInput`<sup>Optional</sup> <a name="EmployeeIdInput" id="@cdktf/provider-azuread.user.User.property.employeeIdInput"></a>

```go
func EmployeeIdInput() *string
```

- *Type:* *string

---

##### `EmployeeTypeInput`<sup>Optional</sup> <a name="EmployeeTypeInput" id="@cdktf/provider-azuread.user.User.property.employeeTypeInput"></a>

```go
func EmployeeTypeInput() *string
```

- *Type:* *string

---

##### `FaxNumberInput`<sup>Optional</sup> <a name="FaxNumberInput" id="@cdktf/provider-azuread.user.User.property.faxNumberInput"></a>

```go
func FaxNumberInput() *string
```

- *Type:* *string

---

##### `ForcePasswordChangeInput`<sup>Optional</sup> <a name="ForcePasswordChangeInput" id="@cdktf/provider-azuread.user.User.property.forcePasswordChangeInput"></a>

```go
func ForcePasswordChangeInput() interface{}
```

- *Type:* interface{}

---

##### `GivenNameInput`<sup>Optional</sup> <a name="GivenNameInput" id="@cdktf/provider-azuread.user.User.property.givenNameInput"></a>

```go
func GivenNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.user.User.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JobTitleInput`<sup>Optional</sup> <a name="JobTitleInput" id="@cdktf/provider-azuread.user.User.property.jobTitleInput"></a>

```go
func JobTitleInput() *string
```

- *Type:* *string

---

##### `MailInput`<sup>Optional</sup> <a name="MailInput" id="@cdktf/provider-azuread.user.User.property.mailInput"></a>

```go
func MailInput() *string
```

- *Type:* *string

---

##### `MailNicknameInput`<sup>Optional</sup> <a name="MailNicknameInput" id="@cdktf/provider-azuread.user.User.property.mailNicknameInput"></a>

```go
func MailNicknameInput() *string
```

- *Type:* *string

---

##### `ManagerIdInput`<sup>Optional</sup> <a name="ManagerIdInput" id="@cdktf/provider-azuread.user.User.property.managerIdInput"></a>

```go
func ManagerIdInput() *string
```

- *Type:* *string

---

##### `MobilePhoneInput`<sup>Optional</sup> <a name="MobilePhoneInput" id="@cdktf/provider-azuread.user.User.property.mobilePhoneInput"></a>

```go
func MobilePhoneInput() *string
```

- *Type:* *string

---

##### `OfficeLocationInput`<sup>Optional</sup> <a name="OfficeLocationInput" id="@cdktf/provider-azuread.user.User.property.officeLocationInput"></a>

```go
func OfficeLocationInput() *string
```

- *Type:* *string

---

##### `OnpremisesImmutableIdInput`<sup>Optional</sup> <a name="OnpremisesImmutableIdInput" id="@cdktf/provider-azuread.user.User.property.onpremisesImmutableIdInput"></a>

```go
func OnpremisesImmutableIdInput() *string
```

- *Type:* *string

---

##### `OtherMailsInput`<sup>Optional</sup> <a name="OtherMailsInput" id="@cdktf/provider-azuread.user.User.property.otherMailsInput"></a>

```go
func OtherMailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-azuread.user.User.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-azuread.user.User.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `PreferredLanguageInput`<sup>Optional</sup> <a name="PreferredLanguageInput" id="@cdktf/provider-azuread.user.User.property.preferredLanguageInput"></a>

```go
func PreferredLanguageInput() *string
```

- *Type:* *string

---

##### `ShowInAddressListInput`<sup>Optional</sup> <a name="ShowInAddressListInput" id="@cdktf/provider-azuread.user.User.property.showInAddressListInput"></a>

```go
func ShowInAddressListInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-azuread.user.User.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `StreetAddressInput`<sup>Optional</sup> <a name="StreetAddressInput" id="@cdktf/provider-azuread.user.User.property.streetAddressInput"></a>

```go
func StreetAddressInput() *string
```

- *Type:* *string

---

##### `SurnameInput`<sup>Optional</sup> <a name="SurnameInput" id="@cdktf/provider-azuread.user.User.property.surnameInput"></a>

```go
func SurnameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.user.User.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UsageLocationInput`<sup>Optional</sup> <a name="UsageLocationInput" id="@cdktf/provider-azuread.user.User.property.usageLocationInput"></a>

```go
func UsageLocationInput() *string
```

- *Type:* *string

---

##### `UserPrincipalNameInput`<sup>Optional</sup> <a name="UserPrincipalNameInput" id="@cdktf/provider-azuread.user.User.property.userPrincipalNameInput"></a>

```go
func UserPrincipalNameInput() *string
```

- *Type:* *string

---

##### `AccountEnabled`<sup>Required</sup> <a name="AccountEnabled" id="@cdktf/provider-azuread.user.User.property.accountEnabled"></a>

```go
func AccountEnabled() interface{}
```

- *Type:* interface{}

---

##### `AgeGroup`<sup>Required</sup> <a name="AgeGroup" id="@cdktf/provider-azuread.user.User.property.ageGroup"></a>

```go
func AgeGroup() *string
```

- *Type:* *string

---

##### `BusinessPhones`<sup>Required</sup> <a name="BusinessPhones" id="@cdktf/provider-azuread.user.User.property.businessPhones"></a>

```go
func BusinessPhones() *[]*string
```

- *Type:* *[]*string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-azuread.user.User.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="@cdktf/provider-azuread.user.User.property.companyName"></a>

```go
func CompanyName() *string
```

- *Type:* *string

---

##### `ConsentProvidedForMinor`<sup>Required</sup> <a name="ConsentProvidedForMinor" id="@cdktf/provider-azuread.user.User.property.consentProvidedForMinor"></a>

```go
func ConsentProvidedForMinor() *string
```

- *Type:* *string

---

##### `CostCenter`<sup>Required</sup> <a name="CostCenter" id="@cdktf/provider-azuread.user.User.property.costCenter"></a>

```go
func CostCenter() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktf/provider-azuread.user.User.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `Department`<sup>Required</sup> <a name="Department" id="@cdktf/provider-azuread.user.User.property.department"></a>

```go
func Department() *string
```

- *Type:* *string

---

##### `DisablePasswordExpiration`<sup>Required</sup> <a name="DisablePasswordExpiration" id="@cdktf/provider-azuread.user.User.property.disablePasswordExpiration"></a>

```go
func DisablePasswordExpiration() interface{}
```

- *Type:* interface{}

---

##### `DisableStrongPassword`<sup>Required</sup> <a name="DisableStrongPassword" id="@cdktf/provider-azuread.user.User.property.disableStrongPassword"></a>

```go
func DisableStrongPassword() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.user.User.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Division`<sup>Required</sup> <a name="Division" id="@cdktf/provider-azuread.user.User.property.division"></a>

```go
func Division() *string
```

- *Type:* *string

---

##### `EmployeeId`<sup>Required</sup> <a name="EmployeeId" id="@cdktf/provider-azuread.user.User.property.employeeId"></a>

```go
func EmployeeId() *string
```

- *Type:* *string

---

##### `EmployeeType`<sup>Required</sup> <a name="EmployeeType" id="@cdktf/provider-azuread.user.User.property.employeeType"></a>

```go
func EmployeeType() *string
```

- *Type:* *string

---

##### `FaxNumber`<sup>Required</sup> <a name="FaxNumber" id="@cdktf/provider-azuread.user.User.property.faxNumber"></a>

```go
func FaxNumber() *string
```

- *Type:* *string

---

##### `ForcePasswordChange`<sup>Required</sup> <a name="ForcePasswordChange" id="@cdktf/provider-azuread.user.User.property.forcePasswordChange"></a>

```go
func ForcePasswordChange() interface{}
```

- *Type:* interface{}

---

##### `GivenName`<sup>Required</sup> <a name="GivenName" id="@cdktf/provider-azuread.user.User.property.givenName"></a>

```go
func GivenName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.user.User.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `JobTitle`<sup>Required</sup> <a name="JobTitle" id="@cdktf/provider-azuread.user.User.property.jobTitle"></a>

```go
func JobTitle() *string
```

- *Type:* *string

---

##### `Mail`<sup>Required</sup> <a name="Mail" id="@cdktf/provider-azuread.user.User.property.mail"></a>

```go
func Mail() *string
```

- *Type:* *string

---

##### `MailNickname`<sup>Required</sup> <a name="MailNickname" id="@cdktf/provider-azuread.user.User.property.mailNickname"></a>

```go
func MailNickname() *string
```

- *Type:* *string

---

##### `ManagerId`<sup>Required</sup> <a name="ManagerId" id="@cdktf/provider-azuread.user.User.property.managerId"></a>

```go
func ManagerId() *string
```

- *Type:* *string

---

##### `MobilePhone`<sup>Required</sup> <a name="MobilePhone" id="@cdktf/provider-azuread.user.User.property.mobilePhone"></a>

```go
func MobilePhone() *string
```

- *Type:* *string

---

##### `OfficeLocation`<sup>Required</sup> <a name="OfficeLocation" id="@cdktf/provider-azuread.user.User.property.officeLocation"></a>

```go
func OfficeLocation() *string
```

- *Type:* *string

---

##### `OnpremisesImmutableId`<sup>Required</sup> <a name="OnpremisesImmutableId" id="@cdktf/provider-azuread.user.User.property.onpremisesImmutableId"></a>

```go
func OnpremisesImmutableId() *string
```

- *Type:* *string

---

##### `OtherMails`<sup>Required</sup> <a name="OtherMails" id="@cdktf/provider-azuread.user.User.property.otherMails"></a>

```go
func OtherMails() *[]*string
```

- *Type:* *[]*string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azuread.user.User.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-azuread.user.User.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktf/provider-azuread.user.User.property.preferredLanguage"></a>

```go
func PreferredLanguage() *string
```

- *Type:* *string

---

##### `ShowInAddressList`<sup>Required</sup> <a name="ShowInAddressList" id="@cdktf/provider-azuread.user.User.property.showInAddressList"></a>

```go
func ShowInAddressList() interface{}
```

- *Type:* interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-azuread.user.User.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-azuread.user.User.property.streetAddress"></a>

```go
func StreetAddress() *string
```

- *Type:* *string

---

##### `Surname`<sup>Required</sup> <a name="Surname" id="@cdktf/provider-azuread.user.User.property.surname"></a>

```go
func Surname() *string
```

- *Type:* *string

---

##### `UsageLocation`<sup>Required</sup> <a name="UsageLocation" id="@cdktf/provider-azuread.user.User.property.usageLocation"></a>

```go
func UsageLocation() *string
```

- *Type:* *string

---

##### `UserPrincipalName`<sup>Required</sup> <a name="UserPrincipalName" id="@cdktf/provider-azuread.user.User.property.userPrincipalName"></a>

```go
func UserPrincipalName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.User.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.user.User.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### UserConfig <a name="UserConfig" id="@cdktf/provider-azuread.user.UserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.user.UserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/user"

&user.UserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	UserPrincipalName: *string,
	AccountEnabled: interface{},
	AgeGroup: *string,
	BusinessPhones: *[]*string,
	City: *string,
	CompanyName: *string,
	ConsentProvidedForMinor: *string,
	CostCenter: *string,
	Country: *string,
	Department: *string,
	DisablePasswordExpiration: interface{},
	DisableStrongPassword: interface{},
	Division: *string,
	EmployeeId: *string,
	EmployeeType: *string,
	FaxNumber: *string,
	ForcePasswordChange: interface{},
	GivenName: *string,
	Id: *string,
	JobTitle: *string,
	Mail: *string,
	MailNickname: *string,
	ManagerId: *string,
	MobilePhone: *string,
	OfficeLocation: *string,
	OnpremisesImmutableId: *string,
	OtherMails: *[]*string,
	Password: *string,
	PostalCode: *string,
	PreferredLanguage: *string,
	ShowInAddressList: interface{},
	State: *string,
	StreetAddress: *string,
	Surname: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread.user.UserTimeouts,
	UsageLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The name to display in the address book for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.userPrincipalName">UserPrincipalName</a></code> | <code>*string</code> | The user principal name (UPN) of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.accountEnabled">AccountEnabled</a></code> | <code>interface{}</code> | Whether or not the account should be enabled. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.ageGroup">AgeGroup</a></code> | <code>*string</code> | The age group of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.businessPhones">BusinessPhones</a></code> | <code>*[]*string</code> | The telephone numbers for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.city">City</a></code> | <code>*string</code> | The city in which the user is located. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.companyName">CompanyName</a></code> | <code>*string</code> | The company name which the user is associated. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.consentProvidedForMinor">ConsentProvidedForMinor</a></code> | <code>*string</code> | Whether consent has been obtained for minors. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.costCenter">CostCenter</a></code> | <code>*string</code> | The cost center associated with the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.country">Country</a></code> | <code>*string</code> | The country/region in which the user is located, e.g. `US` or `UK`. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.department">Department</a></code> | <code>*string</code> | The name for the department in which the user works. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.disablePasswordExpiration">DisablePasswordExpiration</a></code> | <code>interface{}</code> | Whether the users password is exempt from expiring. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.disableStrongPassword">DisableStrongPassword</a></code> | <code>interface{}</code> | Whether the user is allowed weaker passwords than the default policy to be specified. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.division">Division</a></code> | <code>*string</code> | The name of the division in which the user works. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.employeeId">EmployeeId</a></code> | <code>*string</code> | The employee identifier assigned to the user by the organisation. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.employeeType">EmployeeType</a></code> | <code>*string</code> | Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.faxNumber">FaxNumber</a></code> | <code>*string</code> | The fax number of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.forcePasswordChange">ForcePasswordChange</a></code> | <code>interface{}</code> | Whether the user is forced to change the password during the next sign-in. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.givenName">GivenName</a></code> | <code>*string</code> | The given name (first name) of the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#id User#id}. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.jobTitle">JobTitle</a></code> | <code>*string</code> | The user’s job title. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.mail">Mail</a></code> | <code>*string</code> | The SMTP address for the user. Cannot be unset. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.mailNickname">MailNickname</a></code> | <code>*string</code> | The mail alias for the user. Defaults to the user name part of the user principal name (UPN). |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.managerId">ManagerId</a></code> | <code>*string</code> | The object ID of the user's manager. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.mobilePhone">MobilePhone</a></code> | <code>*string</code> | The primary cellular telephone number for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.officeLocation">OfficeLocation</a></code> | <code>*string</code> | The office location in the user's place of business. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.onpremisesImmutableId">OnpremisesImmutableId</a></code> | <code>*string</code> | The value used to associate an on-premise Active Directory user account with their Azure AD user object. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.otherMails">OtherMails</a></code> | <code>*[]*string</code> | Additional email addresses for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.password">Password</a></code> | <code>*string</code> | The password for the user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.postalCode">PostalCode</a></code> | <code>*string</code> | The postal code for the user's postal address. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | The user's preferred language, in ISO 639-1 notation. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.showInAddressList">ShowInAddressList</a></code> | <code>interface{}</code> | Whether or not the Outlook global address list should include this user. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.state">State</a></code> | <code>*string</code> | The state or province in the user's address. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.streetAddress">StreetAddress</a></code> | <code>*string</code> | The street address of the user's place of business. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.surname">Surname</a></code> | <code>*string</code> | The user's surname (family name or last name). |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.user.UserConfig.property.usageLocation">UsageLocation</a></code> | <code>*string</code> | The usage location of the user. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.user.UserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.user.UserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.user.UserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.user.UserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.user.UserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.user.UserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.user.UserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.user.UserConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The name to display in the address book for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#display_name User#display_name}

---

##### `UserPrincipalName`<sup>Required</sup> <a name="UserPrincipalName" id="@cdktf/provider-azuread.user.UserConfig.property.userPrincipalName"></a>

```go
UserPrincipalName *string
```

- *Type:* *string

The user principal name (UPN) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#user_principal_name User#user_principal_name}

---

##### `AccountEnabled`<sup>Optional</sup> <a name="AccountEnabled" id="@cdktf/provider-azuread.user.UserConfig.property.accountEnabled"></a>

```go
AccountEnabled interface{}
```

- *Type:* interface{}

Whether or not the account should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#account_enabled User#account_enabled}

---

##### `AgeGroup`<sup>Optional</sup> <a name="AgeGroup" id="@cdktf/provider-azuread.user.UserConfig.property.ageGroup"></a>

```go
AgeGroup *string
```

- *Type:* *string

The age group of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#age_group User#age_group}

---

##### `BusinessPhones`<sup>Optional</sup> <a name="BusinessPhones" id="@cdktf/provider-azuread.user.UserConfig.property.businessPhones"></a>

```go
BusinessPhones *[]*string
```

- *Type:* *[]*string

The telephone numbers for the user.

Only one number can be set for this property. Read-only for users synced with Azure AD Connect

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#business_phones User#business_phones}

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktf/provider-azuread.user.UserConfig.property.city"></a>

```go
City *string
```

- *Type:* *string

The city in which the user is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#city User#city}

---

##### `CompanyName`<sup>Optional</sup> <a name="CompanyName" id="@cdktf/provider-azuread.user.UserConfig.property.companyName"></a>

```go
CompanyName *string
```

- *Type:* *string

The company name which the user is associated.

This property can be useful for describing the company that an external user comes from

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#company_name User#company_name}

---

##### `ConsentProvidedForMinor`<sup>Optional</sup> <a name="ConsentProvidedForMinor" id="@cdktf/provider-azuread.user.UserConfig.property.consentProvidedForMinor"></a>

```go
ConsentProvidedForMinor *string
```

- *Type:* *string

Whether consent has been obtained for minors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#consent_provided_for_minor User#consent_provided_for_minor}

---

##### `CostCenter`<sup>Optional</sup> <a name="CostCenter" id="@cdktf/provider-azuread.user.UserConfig.property.costCenter"></a>

```go
CostCenter *string
```

- *Type:* *string

The cost center associated with the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#cost_center User#cost_center}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktf/provider-azuread.user.UserConfig.property.country"></a>

```go
Country *string
```

- *Type:* *string

The country/region in which the user is located, e.g. `US` or `UK`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#country User#country}

---

##### `Department`<sup>Optional</sup> <a name="Department" id="@cdktf/provider-azuread.user.UserConfig.property.department"></a>

```go
Department *string
```

- *Type:* *string

The name for the department in which the user works.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#department User#department}

---

##### `DisablePasswordExpiration`<sup>Optional</sup> <a name="DisablePasswordExpiration" id="@cdktf/provider-azuread.user.UserConfig.property.disablePasswordExpiration"></a>

```go
DisablePasswordExpiration interface{}
```

- *Type:* interface{}

Whether the users password is exempt from expiring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#disable_password_expiration User#disable_password_expiration}

---

##### `DisableStrongPassword`<sup>Optional</sup> <a name="DisableStrongPassword" id="@cdktf/provider-azuread.user.UserConfig.property.disableStrongPassword"></a>

```go
DisableStrongPassword interface{}
```

- *Type:* interface{}

Whether the user is allowed weaker passwords than the default policy to be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#disable_strong_password User#disable_strong_password}

---

##### `Division`<sup>Optional</sup> <a name="Division" id="@cdktf/provider-azuread.user.UserConfig.property.division"></a>

```go
Division *string
```

- *Type:* *string

The name of the division in which the user works.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#division User#division}

---

##### `EmployeeId`<sup>Optional</sup> <a name="EmployeeId" id="@cdktf/provider-azuread.user.UserConfig.property.employeeId"></a>

```go
EmployeeId *string
```

- *Type:* *string

The employee identifier assigned to the user by the organisation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#employee_id User#employee_id}

---

##### `EmployeeType`<sup>Optional</sup> <a name="EmployeeType" id="@cdktf/provider-azuread.user.UserConfig.property.employeeType"></a>

```go
EmployeeType *string
```

- *Type:* *string

Captures enterprise worker type. For example, Employee, Contractor, Consultant, or Vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#employee_type User#employee_type}

---

##### `FaxNumber`<sup>Optional</sup> <a name="FaxNumber" id="@cdktf/provider-azuread.user.UserConfig.property.faxNumber"></a>

```go
FaxNumber *string
```

- *Type:* *string

The fax number of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#fax_number User#fax_number}

---

##### `ForcePasswordChange`<sup>Optional</sup> <a name="ForcePasswordChange" id="@cdktf/provider-azuread.user.UserConfig.property.forcePasswordChange"></a>

```go
ForcePasswordChange interface{}
```

- *Type:* interface{}

Whether the user is forced to change the password during the next sign-in.

Only takes effect when also changing the password

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#force_password_change User#force_password_change}

---

##### `GivenName`<sup>Optional</sup> <a name="GivenName" id="@cdktf/provider-azuread.user.UserConfig.property.givenName"></a>

```go
GivenName *string
```

- *Type:* *string

The given name (first name) of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#given_name User#given_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.user.UserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#id User#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JobTitle`<sup>Optional</sup> <a name="JobTitle" id="@cdktf/provider-azuread.user.UserConfig.property.jobTitle"></a>

```go
JobTitle *string
```

- *Type:* *string

The user’s job title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#job_title User#job_title}

---

##### `Mail`<sup>Optional</sup> <a name="Mail" id="@cdktf/provider-azuread.user.UserConfig.property.mail"></a>

```go
Mail *string
```

- *Type:* *string

The SMTP address for the user. Cannot be unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#mail User#mail}

---

##### `MailNickname`<sup>Optional</sup> <a name="MailNickname" id="@cdktf/provider-azuread.user.UserConfig.property.mailNickname"></a>

```go
MailNickname *string
```

- *Type:* *string

The mail alias for the user. Defaults to the user name part of the user principal name (UPN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#mail_nickname User#mail_nickname}

---

##### `ManagerId`<sup>Optional</sup> <a name="ManagerId" id="@cdktf/provider-azuread.user.UserConfig.property.managerId"></a>

```go
ManagerId *string
```

- *Type:* *string

The object ID of the user's manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#manager_id User#manager_id}

---

##### `MobilePhone`<sup>Optional</sup> <a name="MobilePhone" id="@cdktf/provider-azuread.user.UserConfig.property.mobilePhone"></a>

```go
MobilePhone *string
```

- *Type:* *string

The primary cellular telephone number for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#mobile_phone User#mobile_phone}

---

##### `OfficeLocation`<sup>Optional</sup> <a name="OfficeLocation" id="@cdktf/provider-azuread.user.UserConfig.property.officeLocation"></a>

```go
OfficeLocation *string
```

- *Type:* *string

The office location in the user's place of business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#office_location User#office_location}

---

##### `OnpremisesImmutableId`<sup>Optional</sup> <a name="OnpremisesImmutableId" id="@cdktf/provider-azuread.user.UserConfig.property.onpremisesImmutableId"></a>

```go
OnpremisesImmutableId *string
```

- *Type:* *string

The value used to associate an on-premise Active Directory user account with their Azure AD user object.

This must be specified if you are using a federated domain for the user's `user_principal_name` property when creating a new user account

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#onpremises_immutable_id User#onpremises_immutable_id}

---

##### `OtherMails`<sup>Optional</sup> <a name="OtherMails" id="@cdktf/provider-azuread.user.UserConfig.property.otherMails"></a>

```go
OtherMails *[]*string
```

- *Type:* *[]*string

Additional email addresses for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#other_mails User#other_mails}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-azuread.user.UserConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The password for the user.

The password must satisfy minimum requirements as specified by the password policy. The maximum length is 256 characters. This property is required when creating a new user

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#password User#password}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-azuread.user.UserConfig.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

The postal code for the user's postal address.

The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#postal_code User#postal_code}

---

##### `PreferredLanguage`<sup>Optional</sup> <a name="PreferredLanguage" id="@cdktf/provider-azuread.user.UserConfig.property.preferredLanguage"></a>

```go
PreferredLanguage *string
```

- *Type:* *string

The user's preferred language, in ISO 639-1 notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#preferred_language User#preferred_language}

---

##### `ShowInAddressList`<sup>Optional</sup> <a name="ShowInAddressList" id="@cdktf/provider-azuread.user.UserConfig.property.showInAddressList"></a>

```go
ShowInAddressList interface{}
```

- *Type:* interface{}

Whether or not the Outlook global address list should include this user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#show_in_address_list User#show_in_address_list}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-azuread.user.UserConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

The state or province in the user's address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#state User#state}

---

##### `StreetAddress`<sup>Optional</sup> <a name="StreetAddress" id="@cdktf/provider-azuread.user.UserConfig.property.streetAddress"></a>

```go
StreetAddress *string
```

- *Type:* *string

The street address of the user's place of business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#street_address User#street_address}

---

##### `Surname`<sup>Optional</sup> <a name="Surname" id="@cdktf/provider-azuread.user.UserConfig.property.surname"></a>

```go
Surname *string
```

- *Type:* *string

The user's surname (family name or last name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#surname User#surname}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.user.UserConfig.property.timeouts"></a>

```go
Timeouts UserTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.user.UserTimeouts">UserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#timeouts User#timeouts}

---

##### `UsageLocation`<sup>Optional</sup> <a name="UsageLocation" id="@cdktf/provider-azuread.user.UserConfig.property.usageLocation"></a>

```go
UsageLocation *string
```

- *Type:* *string

The usage location of the user.

Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. The usage location is a two letter country code (ISO standard 3166). Examples include: `NO`, `JP`, and `GB`. Cannot be reset to null once set

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#usage_location User#usage_location}

---

### UserTimeouts <a name="UserTimeouts" id="@cdktf/provider-azuread.user.UserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.user.UserTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/user"

&user.UserTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#create User#create}. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#delete User#delete}. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#read User#read}. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#update User#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.user.UserTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#create User#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.user.UserTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#delete User#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.user.UserTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#read User#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.user.UserTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.45.0/docs/resources/user#update User#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### UserTimeoutsOutputReference <a name="UserTimeoutsOutputReference" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/user"

user.NewUserTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) UserTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.user.UserTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



