# `data_azuread_group`

Refer to the Terraform Registory for docs: [`data_azuread_group`](https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/group).

# `dataAzureadGroup` Submodule <a name="`dataAzureadGroup` Submodule" id="@cdktf/provider-azuread.dataAzureadGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzureadGroup <a name="DataAzureadGroup" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/group azuread_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadgroup"

dataazureadgroup.NewDataAzureadGroup(scope Construct, id *string, config DataAzureadGroupConfig) DataAzureadGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig">DataAzureadGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig">DataAzureadGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetMailEnabled">ResetMailEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetObjectId">ResetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetSecurityEnabled">ResetSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.putTimeouts"></a>

```go
func PutTimeouts(value DataAzureadGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetMailEnabled` <a name="ResetMailEnabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetMailEnabled"></a>

```go
func ResetMailEnabled()
```

##### `ResetObjectId` <a name="ResetObjectId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetObjectId"></a>

```go
func ResetObjectId()
```

##### `ResetSecurityEnabled` <a name="ResetSecurityEnabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetSecurityEnabled"></a>

```go
func ResetSecurityEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadgroup"

dataazureadgroup.DataAzureadGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadgroup"

dataazureadgroup.DataAzureadGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadgroup"

dataazureadgroup.DataAzureadGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.assignableToRole">AssignableToRole</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.autoSubscribeNewMembers">AutoSubscribeNewMembers</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.behaviors">Behaviors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.dynamicMembership">DynamicMembership</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList">DataAzureadGroupDynamicMembershipList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.externalSendersAllowed">ExternalSendersAllowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.hideFromAddressLists">HideFromAddressLists</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.hideFromOutlookClients">HideFromOutlookClients</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mail">Mail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailNickname">MailNickname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesDomainName">OnpremisesDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesGroupType">OnpremisesGroupType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesNetbiosName">OnpremisesNetbiosName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSamAccountName">OnpremisesSamAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSecurityIdentifier">OnpremisesSecurityIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSyncEnabled">OnpremisesSyncEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.owners">Owners</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.provisioningOptions">ProvisioningOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.proxyAddresses">ProxyAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.theme">Theme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference">DataAzureadGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.types">Types</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.writebackEnabled">WritebackEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailEnabledInput">MailEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.securityEnabledInput">SecurityEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailEnabled">MailEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.securityEnabled">SecurityEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AssignableToRole`<sup>Required</sup> <a name="AssignableToRole" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.assignableToRole"></a>

```go
func AssignableToRole() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutoSubscribeNewMembers`<sup>Required</sup> <a name="AutoSubscribeNewMembers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.autoSubscribeNewMembers"></a>

```go
func AutoSubscribeNewMembers() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Behaviors`<sup>Required</sup> <a name="Behaviors" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.behaviors"></a>

```go
func Behaviors() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DynamicMembership`<sup>Required</sup> <a name="DynamicMembership" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.dynamicMembership"></a>

```go
func DynamicMembership() DataAzureadGroupDynamicMembershipList
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList">DataAzureadGroupDynamicMembershipList</a>

---

##### `ExternalSendersAllowed`<sup>Required</sup> <a name="ExternalSendersAllowed" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.externalSendersAllowed"></a>

```go
func ExternalSendersAllowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HideFromAddressLists`<sup>Required</sup> <a name="HideFromAddressLists" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.hideFromAddressLists"></a>

```go
func HideFromAddressLists() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HideFromOutlookClients`<sup>Required</sup> <a name="HideFromOutlookClients" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.hideFromOutlookClients"></a>

```go
func HideFromOutlookClients() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Mail`<sup>Required</sup> <a name="Mail" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mail"></a>

```go
func Mail() *string
```

- *Type:* *string

---

##### `MailNickname`<sup>Required</sup> <a name="MailNickname" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailNickname"></a>

```go
func MailNickname() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `OnpremisesDomainName`<sup>Required</sup> <a name="OnpremisesDomainName" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesDomainName"></a>

```go
func OnpremisesDomainName() *string
```

- *Type:* *string

---

##### `OnpremisesGroupType`<sup>Required</sup> <a name="OnpremisesGroupType" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesGroupType"></a>

```go
func OnpremisesGroupType() *string
```

- *Type:* *string

---

##### `OnpremisesNetbiosName`<sup>Required</sup> <a name="OnpremisesNetbiosName" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesNetbiosName"></a>

```go
func OnpremisesNetbiosName() *string
```

- *Type:* *string

---

##### `OnpremisesSamAccountName`<sup>Required</sup> <a name="OnpremisesSamAccountName" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSamAccountName"></a>

```go
func OnpremisesSamAccountName() *string
```

- *Type:* *string

---

##### `OnpremisesSecurityIdentifier`<sup>Required</sup> <a name="OnpremisesSecurityIdentifier" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSecurityIdentifier"></a>

```go
func OnpremisesSecurityIdentifier() *string
```

- *Type:* *string

---

##### `OnpremisesSyncEnabled`<sup>Required</sup> <a name="OnpremisesSyncEnabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.onpremisesSyncEnabled"></a>

```go
func OnpremisesSyncEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Owners`<sup>Required</sup> <a name="Owners" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.owners"></a>

```go
func Owners() *[]*string
```

- *Type:* *[]*string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.preferredLanguage"></a>

```go
func PreferredLanguage() *string
```

- *Type:* *string

---

##### `ProvisioningOptions`<sup>Required</sup> <a name="ProvisioningOptions" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.provisioningOptions"></a>

```go
func ProvisioningOptions() *[]*string
```

- *Type:* *[]*string

---

##### `ProxyAddresses`<sup>Required</sup> <a name="ProxyAddresses" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.proxyAddresses"></a>

```go
func ProxyAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Theme`<sup>Required</sup> <a name="Theme" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.theme"></a>

```go
func Theme() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.timeouts"></a>

```go
func Timeouts() DataAzureadGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference">DataAzureadGroupTimeoutsOutputReference</a>

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.types"></a>

```go
func Types() *[]*string
```

- *Type:* *[]*string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

##### `WritebackEnabled`<sup>Required</sup> <a name="WritebackEnabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.writebackEnabled"></a>

```go
func WritebackEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MailEnabledInput`<sup>Optional</sup> <a name="MailEnabledInput" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailEnabledInput"></a>

```go
func MailEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `SecurityEnabledInput`<sup>Optional</sup> <a name="SecurityEnabledInput" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.securityEnabledInput"></a>

```go
func SecurityEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MailEnabled`<sup>Required</sup> <a name="MailEnabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.mailEnabled"></a>

```go
func MailEnabled() interface{}
```

- *Type:* interface{}

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `SecurityEnabled`<sup>Required</sup> <a name="SecurityEnabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.securityEnabled"></a>

```go
func SecurityEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzureadGroupConfig <a name="DataAzureadGroupConfig" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadgroup"

&dataazureadgroup.DataAzureadGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	Id: *string,
	MailEnabled: interface{},
	ObjectId: *string,
	SecurityEnabled: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread.dataAzureadGroup.DataAzureadGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name for the group. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/group#id DataAzureadGroup#id}. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.mailEnabled">MailEnabled</a></code> | <code>interface{}</code> | Whether the group is mail-enabled. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.objectId">ObjectId</a></code> | <code>*string</code> | The object ID of the group. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.securityEnabled">SecurityEnabled</a></code> | <code>interface{}</code> | Whether the group is a security group. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name for the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/group#display_name DataAzureadGroup#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/group#id DataAzureadGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MailEnabled`<sup>Optional</sup> <a name="MailEnabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.mailEnabled"></a>

```go
MailEnabled interface{}
```

- *Type:* interface{}

Whether the group is mail-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/group#mail_enabled DataAzureadGroup#mail_enabled}

---

##### `ObjectId`<sup>Optional</sup> <a name="ObjectId" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

The object ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/group#object_id DataAzureadGroup#object_id}

---

##### `SecurityEnabled`<sup>Optional</sup> <a name="SecurityEnabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.securityEnabled"></a>

```go
SecurityEnabled interface{}
```

- *Type:* interface{}

Whether the group is a security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/group#security_enabled DataAzureadGroup#security_enabled}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupConfig.property.timeouts"></a>

```go
Timeouts DataAzureadGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts">DataAzureadGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/group#timeouts DataAzureadGroup#timeouts}

---

### DataAzureadGroupDynamicMembership <a name="DataAzureadGroupDynamicMembership" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembership"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembership.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadgroup"

&dataazureadgroup.DataAzureadGroupDynamicMembership {

}
```


### DataAzureadGroupTimeouts <a name="DataAzureadGroupTimeouts" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadgroup"

&dataazureadgroup.DataAzureadGroupTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/group#read DataAzureadGroup#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.37.2/docs/data-sources/group#read DataAzureadGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzureadGroupDynamicMembershipList <a name="DataAzureadGroupDynamicMembershipList" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadgroup"

dataazureadgroup.NewDataAzureadGroupDynamicMembershipList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzureadGroupDynamicMembershipList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.get"></a>

```go
func Get(index *f64) DataAzureadGroupDynamicMembershipOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzureadGroupDynamicMembershipOutputReference <a name="DataAzureadGroupDynamicMembershipOutputReference" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadgroup"

dataazureadgroup.NewDataAzureadGroupDynamicMembershipOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzureadGroupDynamicMembershipOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.rule">Rule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembership">DataAzureadGroupDynamicMembership</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.rule"></a>

```go
func Rule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembershipOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzureadGroupDynamicMembership
```

- *Type:* <a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupDynamicMembership">DataAzureadGroupDynamicMembership</a>

---


### DataAzureadGroupTimeoutsOutputReference <a name="DataAzureadGroupTimeoutsOutputReference" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/dataazureadgroup"

dataazureadgroup.NewDataAzureadGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzureadGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.dataAzureadGroup.DataAzureadGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



