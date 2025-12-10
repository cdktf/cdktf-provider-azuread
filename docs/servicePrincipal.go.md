# `servicePrincipal` Submodule <a name="`servicePrincipal` Submodule" id="@cdktf/provider-azuread.servicePrincipal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipal <a name="ServicePrincipal" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal azuread_service_principal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

serviceprincipal.NewServicePrincipal(scope Construct, id *string, config ServicePrincipalConfig) ServicePrincipal
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig">ServicePrincipalConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig">ServicePrincipalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putFeatures">PutFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putFeatureTags">PutFeatureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putSamlSingleSignOn">PutSamlSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetAccountEnabled">ResetAccountEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetAlternativeNames">ResetAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetAppRoleAssignmentRequired">ResetAppRoleAssignmentRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetFeatures">ResetFeatures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetFeatureTags">ResetFeatureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetLoginUrl">ResetLoginUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetNotificationEmailAddresses">ResetNotificationEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetOwners">ResetOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetPreferredSingleSignOnMode">ResetPreferredSingleSignOnMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetSamlSingleSignOn">ResetSamlSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetUseExisting">ResetUseExisting</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFeatures` <a name="PutFeatures" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putFeatures"></a>

```go
func PutFeatures(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putFeatures.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFeatureTags` <a name="PutFeatureTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putFeatureTags"></a>

```go
func PutFeatureTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putFeatureTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSamlSingleSignOn` <a name="PutSamlSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putSamlSingleSignOn"></a>

```go
func PutSamlSingleSignOn(value ServicePrincipalSamlSingleSignOn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putSamlSingleSignOn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putTimeouts"></a>

```go
func PutTimeouts(value ServicePrincipalTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a>

---

##### `ResetAccountEnabled` <a name="ResetAccountEnabled" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetAccountEnabled"></a>

```go
func ResetAccountEnabled()
```

##### `ResetAlternativeNames` <a name="ResetAlternativeNames" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetAlternativeNames"></a>

```go
func ResetAlternativeNames()
```

##### `ResetAppRoleAssignmentRequired` <a name="ResetAppRoleAssignmentRequired" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetAppRoleAssignmentRequired"></a>

```go
func ResetAppRoleAssignmentRequired()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFeatures` <a name="ResetFeatures" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetFeatures"></a>

```go
func ResetFeatures()
```

##### `ResetFeatureTags` <a name="ResetFeatureTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetFeatureTags"></a>

```go
func ResetFeatureTags()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetId"></a>

```go
func ResetId()
```

##### `ResetLoginUrl` <a name="ResetLoginUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetLoginUrl"></a>

```go
func ResetLoginUrl()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetNotes"></a>

```go
func ResetNotes()
```

##### `ResetNotificationEmailAddresses` <a name="ResetNotificationEmailAddresses" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetNotificationEmailAddresses"></a>

```go
func ResetNotificationEmailAddresses()
```

##### `ResetOwners` <a name="ResetOwners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetOwners"></a>

```go
func ResetOwners()
```

##### `ResetPreferredSingleSignOnMode` <a name="ResetPreferredSingleSignOnMode" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetPreferredSingleSignOnMode"></a>

```go
func ResetPreferredSingleSignOnMode()
```

##### `ResetSamlSingleSignOn` <a name="ResetSamlSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetSamlSingleSignOn"></a>

```go
func ResetSamlSingleSignOn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUseExisting` <a name="ResetUseExisting" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.resetUseExisting"></a>

```go
func ResetUseExisting()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServicePrincipal resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

serviceprincipal.ServicePrincipal_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

serviceprincipal.ServicePrincipal_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

serviceprincipal.ServicePrincipal_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

serviceprincipal.ServicePrincipal_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServicePrincipal resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServicePrincipal to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServicePrincipal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.applicationTenantId">ApplicationTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleIds">AppRoleIds</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoles">AppRoles</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList">ServicePrincipalAppRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.features">Features</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList">ServicePrincipalFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featureTags">FeatureTags</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList">ServicePrincipalFeatureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.homepageUrl">HomepageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.logoutUrl">LogoutUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.oauth2PermissionScopeIds">Oauth2PermissionScopeIds</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.oauth2PermissionScopes">Oauth2PermissionScopes</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList">ServicePrincipalOauth2PermissionScopesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.redirectUris">RedirectUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlMetadataUrl">SamlMetadataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlSingleSignOn">SamlSingleSignOn</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference">ServicePrincipalSamlSingleSignOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.servicePrincipalNames">ServicePrincipalNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.signInAudience">SignInAudience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference">ServicePrincipalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.accountEnabledInput">AccountEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.alternativeNamesInput">AlternativeNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleAssignmentRequiredInput">AppRoleAssignmentRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featuresInput">FeaturesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featureTagsInput">FeatureTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.loginUrlInput">LoginUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notesInput">NotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notificationEmailAddressesInput">NotificationEmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.ownersInput">OwnersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.preferredSingleSignOnModeInput">PreferredSingleSignOnModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlSingleSignOnInput">SamlSingleSignOnInput</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.useExistingInput">UseExistingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.accountEnabled">AccountEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.alternativeNames">AlternativeNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleAssignmentRequired">AppRoleAssignmentRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.loginUrl">LoginUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notes">Notes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notificationEmailAddresses">NotificationEmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.owners">Owners</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.preferredSingleSignOnMode">PreferredSingleSignOnMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.useExisting">UseExisting</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationTenantId`<sup>Required</sup> <a name="ApplicationTenantId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.applicationTenantId"></a>

```go
func ApplicationTenantId() *string
```

- *Type:* *string

---

##### `AppRoleIds`<sup>Required</sup> <a name="AppRoleIds" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleIds"></a>

```go
func AppRoleIds() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AppRoles`<sup>Required</sup> <a name="AppRoles" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoles"></a>

```go
func AppRoles() ServicePrincipalAppRolesList
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList">ServicePrincipalAppRolesList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.features"></a>

```go
func Features() ServicePrincipalFeaturesList
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList">ServicePrincipalFeaturesList</a>

---

##### `FeatureTags`<sup>Required</sup> <a name="FeatureTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featureTags"></a>

```go
func FeatureTags() ServicePrincipalFeatureTagsList
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList">ServicePrincipalFeatureTagsList</a>

---

##### `HomepageUrl`<sup>Required</sup> <a name="HomepageUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.homepageUrl"></a>

```go
func HomepageUrl() *string
```

- *Type:* *string

---

##### `LogoutUrl`<sup>Required</sup> <a name="LogoutUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.logoutUrl"></a>

```go
func LogoutUrl() *string
```

- *Type:* *string

---

##### `Oauth2PermissionScopeIds`<sup>Required</sup> <a name="Oauth2PermissionScopeIds" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.oauth2PermissionScopeIds"></a>

```go
func Oauth2PermissionScopeIds() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Oauth2PermissionScopes`<sup>Required</sup> <a name="Oauth2PermissionScopes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.oauth2PermissionScopes"></a>

```go
func Oauth2PermissionScopes() ServicePrincipalOauth2PermissionScopesList
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList">ServicePrincipalOauth2PermissionScopesList</a>

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.redirectUris"></a>

```go
func RedirectUris() *[]*string
```

- *Type:* *[]*string

---

##### `SamlMetadataUrl`<sup>Required</sup> <a name="SamlMetadataUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlMetadataUrl"></a>

```go
func SamlMetadataUrl() *string
```

- *Type:* *string

---

##### `SamlSingleSignOn`<sup>Required</sup> <a name="SamlSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlSingleSignOn"></a>

```go
func SamlSingleSignOn() ServicePrincipalSamlSingleSignOnOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference">ServicePrincipalSamlSingleSignOnOutputReference</a>

---

##### `ServicePrincipalNames`<sup>Required</sup> <a name="ServicePrincipalNames" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.servicePrincipalNames"></a>

```go
func ServicePrincipalNames() *[]*string
```

- *Type:* *[]*string

---

##### `SignInAudience`<sup>Required</sup> <a name="SignInAudience" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.signInAudience"></a>

```go
func SignInAudience() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.timeouts"></a>

```go
func Timeouts() ServicePrincipalTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference">ServicePrincipalTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `AccountEnabledInput`<sup>Optional</sup> <a name="AccountEnabledInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.accountEnabledInput"></a>

```go
func AccountEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AlternativeNamesInput`<sup>Optional</sup> <a name="AlternativeNamesInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.alternativeNamesInput"></a>

```go
func AlternativeNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AppRoleAssignmentRequiredInput`<sup>Optional</sup> <a name="AppRoleAssignmentRequiredInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleAssignmentRequiredInput"></a>

```go
func AppRoleAssignmentRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FeaturesInput`<sup>Optional</sup> <a name="FeaturesInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featuresInput"></a>

```go
func FeaturesInput() interface{}
```

- *Type:* interface{}

---

##### `FeatureTagsInput`<sup>Optional</sup> <a name="FeatureTagsInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.featureTagsInput"></a>

```go
func FeatureTagsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoginUrlInput`<sup>Optional</sup> <a name="LoginUrlInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.loginUrlInput"></a>

```go
func LoginUrlInput() *string
```

- *Type:* *string

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notesInput"></a>

```go
func NotesInput() *string
```

- *Type:* *string

---

##### `NotificationEmailAddressesInput`<sup>Optional</sup> <a name="NotificationEmailAddressesInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notificationEmailAddressesInput"></a>

```go
func NotificationEmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OwnersInput`<sup>Optional</sup> <a name="OwnersInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.ownersInput"></a>

```go
func OwnersInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredSingleSignOnModeInput`<sup>Optional</sup> <a name="PreferredSingleSignOnModeInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.preferredSingleSignOnModeInput"></a>

```go
func PreferredSingleSignOnModeInput() *string
```

- *Type:* *string

---

##### `SamlSingleSignOnInput`<sup>Optional</sup> <a name="SamlSingleSignOnInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.samlSingleSignOnInput"></a>

```go
func SamlSingleSignOnInput() ServicePrincipalSamlSingleSignOn
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UseExistingInput`<sup>Optional</sup> <a name="UseExistingInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.useExistingInput"></a>

```go
func UseExistingInput() interface{}
```

- *Type:* interface{}

---

##### `AccountEnabled`<sup>Required</sup> <a name="AccountEnabled" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.accountEnabled"></a>

```go
func AccountEnabled() interface{}
```

- *Type:* interface{}

---

##### `AlternativeNames`<sup>Required</sup> <a name="AlternativeNames" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.alternativeNames"></a>

```go
func AlternativeNames() *[]*string
```

- *Type:* *[]*string

---

##### `AppRoleAssignmentRequired`<sup>Required</sup> <a name="AppRoleAssignmentRequired" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.appRoleAssignmentRequired"></a>

```go
func AppRoleAssignmentRequired() interface{}
```

- *Type:* interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoginUrl`<sup>Required</sup> <a name="LoginUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.loginUrl"></a>

```go
func LoginUrl() *string
```

- *Type:* *string

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notes"></a>

```go
func Notes() *string
```

- *Type:* *string

---

##### `NotificationEmailAddresses`<sup>Required</sup> <a name="NotificationEmailAddresses" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.notificationEmailAddresses"></a>

```go
func NotificationEmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Owners`<sup>Required</sup> <a name="Owners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.owners"></a>

```go
func Owners() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredSingleSignOnMode`<sup>Required</sup> <a name="PreferredSingleSignOnMode" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.preferredSingleSignOnMode"></a>

```go
func PreferredSingleSignOnMode() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `UseExisting`<sup>Required</sup> <a name="UseExisting" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.useExisting"></a>

```go
func UseExisting() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipal.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalAppRoles <a name="ServicePrincipalAppRoles" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRoles.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

&serviceprincipal.ServicePrincipalAppRoles {

}
```


### ServicePrincipalConfig <a name="ServicePrincipalConfig" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

&serviceprincipal.ServicePrincipalConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClientId: *string,
	AccountEnabled: interface{},
	AlternativeNames: *[]*string,
	AppRoleAssignmentRequired: interface{},
	Description: *string,
	Features: interface{},
	FeatureTags: interface{},
	Id: *string,
	LoginUrl: *string,
	Notes: *string,
	NotificationEmailAddresses: *[]*string,
	Owners: *[]*string,
	PreferredSingleSignOnMode: *string,
	SamlSingleSignOn: github.com/cdktf/cdktf-provider-azuread-go/azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn,
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread.servicePrincipal.ServicePrincipalTimeouts,
	UseExisting: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID of the application for which to create a service principal. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.accountEnabled">AccountEnabled</a></code> | <code>interface{}</code> | Whether or not the service principal account is enabled. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.alternativeNames">AlternativeNames</a></code> | <code>*[]*string</code> | A list of alternative names, used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.appRoleAssignmentRequired">AppRoleAssignmentRequired</a></code> | <code>interface{}</code> | Whether this service principal requires an app role assignment to a user or group before Azure AD will issue a user or access token to the application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.description">Description</a></code> | <code>*string</code> | Description of the service principal provided for internal end-users. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.features">Features</a></code> | <code>interface{}</code> | features block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.featureTags">FeatureTags</a></code> | <code>interface{}</code> | feature_tags block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#id ServicePrincipal#id}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.loginUrl">LoginUrl</a></code> | <code>*string</code> | The URL where the service provider redirects the user to Azure AD to authenticate. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.notes">Notes</a></code> | <code>*string</code> | Free text field to capture information about the service principal, typically used for operational purposes. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.notificationEmailAddresses">NotificationEmailAddresses</a></code> | <code>*[]*string</code> | List of email addresses where Azure AD sends a notification when the active certificate is near the expiration date. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.owners">Owners</a></code> | <code>*[]*string</code> | A list of object IDs of principals that will be granted ownership of the service principal. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.preferredSingleSignOnMode">PreferredSingleSignOnMode</a></code> | <code>*string</code> | The single sign-on mode configured for this application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.samlSingleSignOn">SamlSingleSignOn</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a></code> | saml_single_sign_on block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | A set of tags to apply to the service principal. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.useExisting">UseExisting</a></code> | <code>interface{}</code> | When true, the resource will return an existing service principal instead of failing with an error. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID of the application for which to create a service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#client_id ServicePrincipal#client_id}

---

##### `AccountEnabled`<sup>Optional</sup> <a name="AccountEnabled" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.accountEnabled"></a>

```go
AccountEnabled interface{}
```

- *Type:* interface{}

Whether or not the service principal account is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#account_enabled ServicePrincipal#account_enabled}

---

##### `AlternativeNames`<sup>Optional</sup> <a name="AlternativeNames" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.alternativeNames"></a>

```go
AlternativeNames *[]*string
```

- *Type:* *[]*string

A list of alternative names, used to retrieve service principals by subscription, identify resource group and full resource ids for managed identities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#alternative_names ServicePrincipal#alternative_names}

---

##### `AppRoleAssignmentRequired`<sup>Optional</sup> <a name="AppRoleAssignmentRequired" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.appRoleAssignmentRequired"></a>

```go
AppRoleAssignmentRequired interface{}
```

- *Type:* interface{}

Whether this service principal requires an app role assignment to a user or group before Azure AD will issue a user or access token to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#app_role_assignment_required ServicePrincipal#app_role_assignment_required}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the service principal provided for internal end-users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#description ServicePrincipal#description}

---

##### `Features`<sup>Optional</sup> <a name="Features" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.features"></a>

```go
Features interface{}
```

- *Type:* interface{}

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#features ServicePrincipal#features}

---

##### `FeatureTags`<sup>Optional</sup> <a name="FeatureTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.featureTags"></a>

```go
FeatureTags interface{}
```

- *Type:* interface{}

feature_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#feature_tags ServicePrincipal#feature_tags}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#id ServicePrincipal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoginUrl`<sup>Optional</sup> <a name="LoginUrl" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.loginUrl"></a>

```go
LoginUrl *string
```

- *Type:* *string

The URL where the service provider redirects the user to Azure AD to authenticate.

Azure AD uses the URL to launch the application from Microsoft 365 or the Azure AD My Apps. When blank, Azure AD performs IdP-initiated sign-on for applications configured with SAML-based single sign-on

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#login_url ServicePrincipal#login_url}

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.notes"></a>

```go
Notes *string
```

- *Type:* *string

Free text field to capture information about the service principal, typically used for operational purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#notes ServicePrincipal#notes}

---

##### `NotificationEmailAddresses`<sup>Optional</sup> <a name="NotificationEmailAddresses" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.notificationEmailAddresses"></a>

```go
NotificationEmailAddresses *[]*string
```

- *Type:* *[]*string

List of email addresses where Azure AD sends a notification when the active certificate is near the expiration date.

This is only for the certificates used to sign the SAML token issued for Azure AD Gallery applications

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#notification_email_addresses ServicePrincipal#notification_email_addresses}

---

##### `Owners`<sup>Optional</sup> <a name="Owners" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.owners"></a>

```go
Owners *[]*string
```

- *Type:* *[]*string

A list of object IDs of principals that will be granted ownership of the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#owners ServicePrincipal#owners}

---

##### `PreferredSingleSignOnMode`<sup>Optional</sup> <a name="PreferredSingleSignOnMode" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.preferredSingleSignOnMode"></a>

```go
PreferredSingleSignOnMode *string
```

- *Type:* *string

The single sign-on mode configured for this application.

Azure AD uses the preferred single sign-on mode to launch the application from Microsoft 365 or the Azure AD My Apps

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#preferred_single_sign_on_mode ServicePrincipal#preferred_single_sign_on_mode}

---

##### `SamlSingleSignOn`<sup>Optional</sup> <a name="SamlSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.samlSingleSignOn"></a>

```go
SamlSingleSignOn ServicePrincipalSamlSingleSignOn
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a>

saml_single_sign_on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#saml_single_sign_on ServicePrincipal#saml_single_sign_on}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

A set of tags to apply to the service principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#tags ServicePrincipal#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.timeouts"></a>

```go
Timeouts ServicePrincipalTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts">ServicePrincipalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#timeouts ServicePrincipal#timeouts}

---

##### `UseExisting`<sup>Optional</sup> <a name="UseExisting" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalConfig.property.useExisting"></a>

```go
UseExisting interface{}
```

- *Type:* interface{}

When true, the resource will return an existing service principal instead of failing with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#use_existing ServicePrincipal#use_existing}

---

### ServicePrincipalFeatures <a name="ServicePrincipalFeatures" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

&serviceprincipal.ServicePrincipalFeatures {
	CustomSingleSignOnApp: interface{},
	EnterpriseApplication: interface{},
	GalleryApplication: interface{},
	VisibleToUsers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.customSingleSignOnApp">CustomSingleSignOnApp</a></code> | <code>interface{}</code> | Whether this service principal represents a custom SAML application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.enterpriseApplication">EnterpriseApplication</a></code> | <code>interface{}</code> | Whether this service principal represents an Enterprise Application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.galleryApplication">GalleryApplication</a></code> | <code>interface{}</code> | Whether this service principal represents a gallery application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.visibleToUsers">VisibleToUsers</a></code> | <code>interface{}</code> | Whether this app is visible to users in My Apps and Office 365 Launcher. |

---

##### `CustomSingleSignOnApp`<sup>Optional</sup> <a name="CustomSingleSignOnApp" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.customSingleSignOnApp"></a>

```go
CustomSingleSignOnApp interface{}
```

- *Type:* interface{}

Whether this service principal represents a custom SAML application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#custom_single_sign_on_app ServicePrincipal#custom_single_sign_on_app}

---

##### `EnterpriseApplication`<sup>Optional</sup> <a name="EnterpriseApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.enterpriseApplication"></a>

```go
EnterpriseApplication interface{}
```

- *Type:* interface{}

Whether this service principal represents an Enterprise Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#enterprise_application ServicePrincipal#enterprise_application}

---

##### `GalleryApplication`<sup>Optional</sup> <a name="GalleryApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.galleryApplication"></a>

```go
GalleryApplication interface{}
```

- *Type:* interface{}

Whether this service principal represents a gallery application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#gallery_application ServicePrincipal#gallery_application}

---

##### `VisibleToUsers`<sup>Optional</sup> <a name="VisibleToUsers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatures.property.visibleToUsers"></a>

```go
VisibleToUsers interface{}
```

- *Type:* interface{}

Whether this app is visible to users in My Apps and Office 365 Launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#visible_to_users ServicePrincipal#visible_to_users}

---

### ServicePrincipalFeatureTags <a name="ServicePrincipalFeatureTags" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

&serviceprincipal.ServicePrincipalFeatureTags {
	CustomSingleSignOn: interface{},
	Enterprise: interface{},
	Gallery: interface{},
	Hide: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.customSingleSignOn">CustomSingleSignOn</a></code> | <code>interface{}</code> | Whether this service principal represents a custom SAML application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.enterprise">Enterprise</a></code> | <code>interface{}</code> | Whether this service principal represents an Enterprise Application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.gallery">Gallery</a></code> | <code>interface{}</code> | Whether this service principal represents a gallery application. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.hide">Hide</a></code> | <code>interface{}</code> | Whether this app is invisible to users in My Apps and Office 365 Launcher. |

---

##### `CustomSingleSignOn`<sup>Optional</sup> <a name="CustomSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.customSingleSignOn"></a>

```go
CustomSingleSignOn interface{}
```

- *Type:* interface{}

Whether this service principal represents a custom SAML application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#custom_single_sign_on ServicePrincipal#custom_single_sign_on}

---

##### `Enterprise`<sup>Optional</sup> <a name="Enterprise" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.enterprise"></a>

```go
Enterprise interface{}
```

- *Type:* interface{}

Whether this service principal represents an Enterprise Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#enterprise ServicePrincipal#enterprise}

---

##### `Gallery`<sup>Optional</sup> <a name="Gallery" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.gallery"></a>

```go
Gallery interface{}
```

- *Type:* interface{}

Whether this service principal represents a gallery application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#gallery ServicePrincipal#gallery}

---

##### `Hide`<sup>Optional</sup> <a name="Hide" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTags.property.hide"></a>

```go
Hide interface{}
```

- *Type:* interface{}

Whether this app is invisible to users in My Apps and Office 365 Launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#hide ServicePrincipal#hide}

---

### ServicePrincipalOauth2PermissionScopes <a name="ServicePrincipalOauth2PermissionScopes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

&serviceprincipal.ServicePrincipalOauth2PermissionScopes {

}
```


### ServicePrincipalSamlSingleSignOn <a name="ServicePrincipalSamlSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

&serviceprincipal.ServicePrincipalSamlSingleSignOn {
	RelayState: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn.property.relayState">RelayState</a></code> | <code>*string</code> | The relative URI the service provider would redirect to after completion of the single sign-on flow. |

---

##### `RelayState`<sup>Optional</sup> <a name="RelayState" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn.property.relayState"></a>

```go
RelayState *string
```

- *Type:* *string

The relative URI the service provider would redirect to after completion of the single sign-on flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#relay_state ServicePrincipal#relay_state}

---

### ServicePrincipalTimeouts <a name="ServicePrincipalTimeouts" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

&serviceprincipal.ServicePrincipalTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#create ServicePrincipal#create}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#delete ServicePrincipal#delete}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#read ServicePrincipal#read}. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#update ServicePrincipal#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#create ServicePrincipal#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#delete ServicePrincipal#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#read ServicePrincipal#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.7.0/docs/resources/service_principal#update ServicePrincipal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalAppRolesList <a name="ServicePrincipalAppRolesList" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

serviceprincipal.NewServicePrincipalAppRolesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServicePrincipalAppRolesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.get"></a>

```go
func Get(index *f64) ServicePrincipalAppRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ServicePrincipalAppRolesOutputReference <a name="ServicePrincipalAppRolesOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

serviceprincipal.NewServicePrincipalAppRolesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServicePrincipalAppRolesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.allowedMemberTypes">AllowedMemberTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRoles">ServicePrincipalAppRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedMemberTypes`<sup>Required</sup> <a name="AllowedMemberTypes" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.allowedMemberTypes"></a>

```go
func AllowedMemberTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRolesOutputReference.property.internalValue"></a>

```go
func InternalValue() ServicePrincipalAppRoles
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalAppRoles">ServicePrincipalAppRoles</a>

---


### ServicePrincipalFeaturesList <a name="ServicePrincipalFeaturesList" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

serviceprincipal.NewServicePrincipalFeaturesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServicePrincipalFeaturesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.get"></a>

```go
func Get(index *f64) ServicePrincipalFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicePrincipalFeaturesOutputReference <a name="ServicePrincipalFeaturesOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

serviceprincipal.NewServicePrincipalFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServicePrincipalFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetCustomSingleSignOnApp">ResetCustomSingleSignOnApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetEnterpriseApplication">ResetEnterpriseApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetGalleryApplication">ResetGalleryApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetVisibleToUsers">ResetVisibleToUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomSingleSignOnApp` <a name="ResetCustomSingleSignOnApp" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetCustomSingleSignOnApp"></a>

```go
func ResetCustomSingleSignOnApp()
```

##### `ResetEnterpriseApplication` <a name="ResetEnterpriseApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetEnterpriseApplication"></a>

```go
func ResetEnterpriseApplication()
```

##### `ResetGalleryApplication` <a name="ResetGalleryApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetGalleryApplication"></a>

```go
func ResetGalleryApplication()
```

##### `ResetVisibleToUsers` <a name="ResetVisibleToUsers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.resetVisibleToUsers"></a>

```go
func ResetVisibleToUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.customSingleSignOnAppInput">CustomSingleSignOnAppInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.enterpriseApplicationInput">EnterpriseApplicationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.galleryApplicationInput">GalleryApplicationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.visibleToUsersInput">VisibleToUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.customSingleSignOnApp">CustomSingleSignOnApp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.enterpriseApplication">EnterpriseApplication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.galleryApplication">GalleryApplication</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.visibleToUsers">VisibleToUsers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomSingleSignOnAppInput`<sup>Optional</sup> <a name="CustomSingleSignOnAppInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.customSingleSignOnAppInput"></a>

```go
func CustomSingleSignOnAppInput() interface{}
```

- *Type:* interface{}

---

##### `EnterpriseApplicationInput`<sup>Optional</sup> <a name="EnterpriseApplicationInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.enterpriseApplicationInput"></a>

```go
func EnterpriseApplicationInput() interface{}
```

- *Type:* interface{}

---

##### `GalleryApplicationInput`<sup>Optional</sup> <a name="GalleryApplicationInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.galleryApplicationInput"></a>

```go
func GalleryApplicationInput() interface{}
```

- *Type:* interface{}

---

##### `VisibleToUsersInput`<sup>Optional</sup> <a name="VisibleToUsersInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.visibleToUsersInput"></a>

```go
func VisibleToUsersInput() interface{}
```

- *Type:* interface{}

---

##### `CustomSingleSignOnApp`<sup>Required</sup> <a name="CustomSingleSignOnApp" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.customSingleSignOnApp"></a>

```go
func CustomSingleSignOnApp() interface{}
```

- *Type:* interface{}

---

##### `EnterpriseApplication`<sup>Required</sup> <a name="EnterpriseApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.enterpriseApplication"></a>

```go
func EnterpriseApplication() interface{}
```

- *Type:* interface{}

---

##### `GalleryApplication`<sup>Required</sup> <a name="GalleryApplication" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.galleryApplication"></a>

```go
func GalleryApplication() interface{}
```

- *Type:* interface{}

---

##### `VisibleToUsers`<sup>Required</sup> <a name="VisibleToUsers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.visibleToUsers"></a>

```go
func VisibleToUsers() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicePrincipalFeatureTagsList <a name="ServicePrincipalFeatureTagsList" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

serviceprincipal.NewServicePrincipalFeatureTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServicePrincipalFeatureTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.get"></a>

```go
func Get(index *f64) ServicePrincipalFeatureTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicePrincipalFeatureTagsOutputReference <a name="ServicePrincipalFeatureTagsOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

serviceprincipal.NewServicePrincipalFeatureTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServicePrincipalFeatureTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetCustomSingleSignOn">ResetCustomSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetEnterprise">ResetEnterprise</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetGallery">ResetGallery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetHide">ResetHide</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomSingleSignOn` <a name="ResetCustomSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetCustomSingleSignOn"></a>

```go
func ResetCustomSingleSignOn()
```

##### `ResetEnterprise` <a name="ResetEnterprise" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetEnterprise"></a>

```go
func ResetEnterprise()
```

##### `ResetGallery` <a name="ResetGallery" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetGallery"></a>

```go
func ResetGallery()
```

##### `ResetHide` <a name="ResetHide" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.resetHide"></a>

```go
func ResetHide()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.customSingleSignOnInput">CustomSingleSignOnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.enterpriseInput">EnterpriseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.galleryInput">GalleryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.hideInput">HideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.customSingleSignOn">CustomSingleSignOn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.enterprise">Enterprise</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.gallery">Gallery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.hide">Hide</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomSingleSignOnInput`<sup>Optional</sup> <a name="CustomSingleSignOnInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.customSingleSignOnInput"></a>

```go
func CustomSingleSignOnInput() interface{}
```

- *Type:* interface{}

---

##### `EnterpriseInput`<sup>Optional</sup> <a name="EnterpriseInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.enterpriseInput"></a>

```go
func EnterpriseInput() interface{}
```

- *Type:* interface{}

---

##### `GalleryInput`<sup>Optional</sup> <a name="GalleryInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.galleryInput"></a>

```go
func GalleryInput() interface{}
```

- *Type:* interface{}

---

##### `HideInput`<sup>Optional</sup> <a name="HideInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.hideInput"></a>

```go
func HideInput() interface{}
```

- *Type:* interface{}

---

##### `CustomSingleSignOn`<sup>Required</sup> <a name="CustomSingleSignOn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.customSingleSignOn"></a>

```go
func CustomSingleSignOn() interface{}
```

- *Type:* interface{}

---

##### `Enterprise`<sup>Required</sup> <a name="Enterprise" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.enterprise"></a>

```go
func Enterprise() interface{}
```

- *Type:* interface{}

---

##### `Gallery`<sup>Required</sup> <a name="Gallery" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.gallery"></a>

```go
func Gallery() interface{}
```

- *Type:* interface{}

---

##### `Hide`<sup>Required</sup> <a name="Hide" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.hide"></a>

```go
func Hide() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalFeatureTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicePrincipalOauth2PermissionScopesList <a name="ServicePrincipalOauth2PermissionScopesList" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

serviceprincipal.NewServicePrincipalOauth2PermissionScopesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServicePrincipalOauth2PermissionScopesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.get"></a>

```go
func Get(index *f64) ServicePrincipalOauth2PermissionScopesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ServicePrincipalOauth2PermissionScopesOutputReference <a name="ServicePrincipalOauth2PermissionScopesOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

serviceprincipal.NewServicePrincipalOauth2PermissionScopesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServicePrincipalOauth2PermissionScopesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDescription">AdminConsentDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDisplayName">AdminConsentDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDescription">UserConsentDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDisplayName">UserConsentDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopes">ServicePrincipalOauth2PermissionScopes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminConsentDescription`<sup>Required</sup> <a name="AdminConsentDescription" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDescription"></a>

```go
func AdminConsentDescription() *string
```

- *Type:* *string

---

##### `AdminConsentDisplayName`<sup>Required</sup> <a name="AdminConsentDisplayName" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.adminConsentDisplayName"></a>

```go
func AdminConsentDisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserConsentDescription`<sup>Required</sup> <a name="UserConsentDescription" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDescription"></a>

```go
func UserConsentDescription() *string
```

- *Type:* *string

---

##### `UserConsentDisplayName`<sup>Required</sup> <a name="UserConsentDisplayName" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.userConsentDisplayName"></a>

```go
func UserConsentDisplayName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopesOutputReference.property.internalValue"></a>

```go
func InternalValue() ServicePrincipalOauth2PermissionScopes
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalOauth2PermissionScopes">ServicePrincipalOauth2PermissionScopes</a>

---


### ServicePrincipalSamlSingleSignOnOutputReference <a name="ServicePrincipalSamlSingleSignOnOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

serviceprincipal.NewServicePrincipalSamlSingleSignOnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicePrincipalSamlSingleSignOnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.resetRelayState">ResetRelayState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRelayState` <a name="ResetRelayState" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.resetRelayState"></a>

```go
func ResetRelayState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.relayStateInput">RelayStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.relayState">RelayState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RelayStateInput`<sup>Optional</sup> <a name="RelayStateInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.relayStateInput"></a>

```go
func RelayStateInput() *string
```

- *Type:* *string

---

##### `RelayState`<sup>Required</sup> <a name="RelayState" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.relayState"></a>

```go
func RelayState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOnOutputReference.property.internalValue"></a>

```go
func InternalValue() ServicePrincipalSamlSingleSignOn
```

- *Type:* <a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalSamlSingleSignOn">ServicePrincipalSamlSingleSignOn</a>

---


### ServicePrincipalTimeoutsOutputReference <a name="ServicePrincipalTimeoutsOutputReference" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/serviceprincipal"

serviceprincipal.NewServicePrincipalTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicePrincipalTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.servicePrincipal.ServicePrincipalTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



