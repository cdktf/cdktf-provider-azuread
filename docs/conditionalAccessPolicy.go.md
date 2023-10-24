# `azuread_conditional_access_policy`

Refer to the Terraform Registory for docs: [`azuread_conditional_access_policy`](https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy).

# `conditionalAccessPolicy` Submodule <a name="`conditionalAccessPolicy` Submodule" id="@cdktf/provider-azuread.conditionalAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConditionalAccessPolicy <a name="ConditionalAccessPolicy" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy azuread_conditional_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

conditionalaccesspolicy.NewConditionalAccessPolicy(scope Construct, id *string, config ConditionalAccessPolicyConfig) ConditionalAccessPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig">ConditionalAccessPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig">ConditionalAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putGrantControls">PutGrantControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putSessionControls">PutSessionControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetGrantControls">ResetGrantControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetSessionControls">ResetSessionControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putConditions"></a>

```go
func PutConditions(value ConditionalAccessPolicyConditions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions">ConditionalAccessPolicyConditions</a>

---

##### `PutGrantControls` <a name="PutGrantControls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putGrantControls"></a>

```go
func PutGrantControls(value ConditionalAccessPolicyGrantControls)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putGrantControls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls">ConditionalAccessPolicyGrantControls</a>

---

##### `PutSessionControls` <a name="PutSessionControls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putSessionControls"></a>

```go
func PutSessionControls(value ConditionalAccessPolicySessionControls)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putSessionControls.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls">ConditionalAccessPolicySessionControls</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putTimeouts"></a>

```go
func PutTimeouts(value ConditionalAccessPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts">ConditionalAccessPolicyTimeouts</a>

---

##### `ResetGrantControls` <a name="ResetGrantControls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetGrantControls"></a>

```go
func ResetGrantControls()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetSessionControls` <a name="ResetSessionControls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetSessionControls"></a>

```go
func ResetSessionControls()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ConditionalAccessPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

conditionalaccesspolicy.ConditionalAccessPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

conditionalaccesspolicy.ConditionalAccessPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

conditionalaccesspolicy.ConditionalAccessPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

conditionalaccesspolicy.ConditionalAccessPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ConditionalAccessPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConditionalAccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConditionalAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ConditionalAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference">ConditionalAccessPolicyConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.grantControls">GrantControls</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference">ConditionalAccessPolicyGrantControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.sessionControls">SessionControls</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference">ConditionalAccessPolicySessionControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference">ConditionalAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.conditionsInput">ConditionsInput</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions">ConditionalAccessPolicyConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.grantControlsInput">GrantControlsInput</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls">ConditionalAccessPolicyGrantControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.sessionControlsInput">SessionControlsInput</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls">ConditionalAccessPolicySessionControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.conditions"></a>

```go
func Conditions() ConditionalAccessPolicyConditionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference">ConditionalAccessPolicyConditionsOutputReference</a>

---

##### `GrantControls`<sup>Required</sup> <a name="GrantControls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.grantControls"></a>

```go
func GrantControls() ConditionalAccessPolicyGrantControlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference">ConditionalAccessPolicyGrantControlsOutputReference</a>

---

##### `SessionControls`<sup>Required</sup> <a name="SessionControls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.sessionControls"></a>

```go
func SessionControls() ConditionalAccessPolicySessionControlsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference">ConditionalAccessPolicySessionControlsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.timeouts"></a>

```go
func Timeouts() ConditionalAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference">ConditionalAccessPolicyTimeoutsOutputReference</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.conditionsInput"></a>

```go
func ConditionsInput() ConditionalAccessPolicyConditions
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions">ConditionalAccessPolicyConditions</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `GrantControlsInput`<sup>Optional</sup> <a name="GrantControlsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.grantControlsInput"></a>

```go
func GrantControlsInput() ConditionalAccessPolicyGrantControls
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls">ConditionalAccessPolicyGrantControls</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SessionControlsInput`<sup>Optional</sup> <a name="SessionControlsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.sessionControlsInput"></a>

```go
func SessionControlsInput() ConditionalAccessPolicySessionControls
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls">ConditionalAccessPolicySessionControls</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConditionalAccessPolicyConditions <a name="ConditionalAccessPolicyConditions" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

&conditionalaccesspolicy.ConditionalAccessPolicyConditions {
	Applications: github.com/cdktf/cdktf-provider-azuread-go/azuread/v11.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications,
	ClientAppTypes: *[]*string,
	Users: github.com/cdktf/cdktf-provider-azuread-go/azuread/v11.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers,
	ClientApplications: github.com/cdktf/cdktf-provider-azuread-go/azuread/v11.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplications,
	Devices: github.com/cdktf/cdktf-provider-azuread-go/azuread/v11.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices,
	Locations: github.com/cdktf/cdktf-provider-azuread-go/azuread/v11.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations,
	Platforms: github.com/cdktf/cdktf-provider-azuread-go/azuread/v11.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms,
	ServicePrincipalRiskLevels: *[]*string,
	SignInRiskLevels: *[]*string,
	UserRiskLevels: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.applications">Applications</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications">ConditionalAccessPolicyConditionsApplications</a></code> | applications block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.clientAppTypes">ClientAppTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#client_app_types ConditionalAccessPolicy#client_app_types}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.users">Users</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers">ConditionalAccessPolicyConditionsUsers</a></code> | users block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.clientApplications">ClientApplications</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplications">ConditionalAccessPolicyConditionsClientApplications</a></code> | client_applications block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.devices">Devices</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices">ConditionalAccessPolicyConditionsDevices</a></code> | devices block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.locations">Locations</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations">ConditionalAccessPolicyConditionsLocations</a></code> | locations block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.platforms">Platforms</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms">ConditionalAccessPolicyConditionsPlatforms</a></code> | platforms block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.servicePrincipalRiskLevels">ServicePrincipalRiskLevels</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#service_principal_risk_levels ConditionalAccessPolicy#service_principal_risk_levels}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.signInRiskLevels">SignInRiskLevels</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#sign_in_risk_levels ConditionalAccessPolicy#sign_in_risk_levels}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.userRiskLevels">UserRiskLevels</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#user_risk_levels ConditionalAccessPolicy#user_risk_levels}. |

---

##### `Applications`<sup>Required</sup> <a name="Applications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.applications"></a>

```go
Applications ConditionalAccessPolicyConditionsApplications
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications">ConditionalAccessPolicyConditionsApplications</a>

applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#applications ConditionalAccessPolicy#applications}

---

##### `ClientAppTypes`<sup>Required</sup> <a name="ClientAppTypes" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.clientAppTypes"></a>

```go
ClientAppTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#client_app_types ConditionalAccessPolicy#client_app_types}.

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.users"></a>

```go
Users ConditionalAccessPolicyConditionsUsers
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers">ConditionalAccessPolicyConditionsUsers</a>

users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#users ConditionalAccessPolicy#users}

---

##### `ClientApplications`<sup>Optional</sup> <a name="ClientApplications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.clientApplications"></a>

```go
ClientApplications ConditionalAccessPolicyConditionsClientApplications
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplications">ConditionalAccessPolicyConditionsClientApplications</a>

client_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#client_applications ConditionalAccessPolicy#client_applications}

---

##### `Devices`<sup>Optional</sup> <a name="Devices" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.devices"></a>

```go
Devices ConditionalAccessPolicyConditionsDevices
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices">ConditionalAccessPolicyConditionsDevices</a>

devices block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#devices ConditionalAccessPolicy#devices}

---

##### `Locations`<sup>Optional</sup> <a name="Locations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.locations"></a>

```go
Locations ConditionalAccessPolicyConditionsLocations
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations">ConditionalAccessPolicyConditionsLocations</a>

locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#locations ConditionalAccessPolicy#locations}

---

##### `Platforms`<sup>Optional</sup> <a name="Platforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.platforms"></a>

```go
Platforms ConditionalAccessPolicyConditionsPlatforms
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms">ConditionalAccessPolicyConditionsPlatforms</a>

platforms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#platforms ConditionalAccessPolicy#platforms}

---

##### `ServicePrincipalRiskLevels`<sup>Optional</sup> <a name="ServicePrincipalRiskLevels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.servicePrincipalRiskLevels"></a>

```go
ServicePrincipalRiskLevels *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#service_principal_risk_levels ConditionalAccessPolicy#service_principal_risk_levels}.

---

##### `SignInRiskLevels`<sup>Optional</sup> <a name="SignInRiskLevels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.signInRiskLevels"></a>

```go
SignInRiskLevels *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#sign_in_risk_levels ConditionalAccessPolicy#sign_in_risk_levels}.

---

##### `UserRiskLevels`<sup>Optional</sup> <a name="UserRiskLevels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions.property.userRiskLevels"></a>

```go
UserRiskLevels *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#user_risk_levels ConditionalAccessPolicy#user_risk_levels}.

---

### ConditionalAccessPolicyConditionsApplications <a name="ConditionalAccessPolicyConditionsApplications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

&conditionalaccesspolicy.ConditionalAccessPolicyConditionsApplications {
	ExcludedApplications: *[]*string,
	IncludedApplications: *[]*string,
	IncludedUserActions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications.property.excludedApplications">ExcludedApplications</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#excluded_applications ConditionalAccessPolicy#excluded_applications}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications.property.includedApplications">IncludedApplications</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#included_applications ConditionalAccessPolicy#included_applications}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications.property.includedUserActions">IncludedUserActions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#included_user_actions ConditionalAccessPolicy#included_user_actions}. |

---

##### `ExcludedApplications`<sup>Optional</sup> <a name="ExcludedApplications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications.property.excludedApplications"></a>

```go
ExcludedApplications *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#excluded_applications ConditionalAccessPolicy#excluded_applications}.

---

##### `IncludedApplications`<sup>Optional</sup> <a name="IncludedApplications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications.property.includedApplications"></a>

```go
IncludedApplications *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#included_applications ConditionalAccessPolicy#included_applications}.

---

##### `IncludedUserActions`<sup>Optional</sup> <a name="IncludedUserActions" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications.property.includedUserActions"></a>

```go
IncludedUserActions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#included_user_actions ConditionalAccessPolicy#included_user_actions}.

---

### ConditionalAccessPolicyConditionsClientApplications <a name="ConditionalAccessPolicyConditionsClientApplications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplications.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

&conditionalaccesspolicy.ConditionalAccessPolicyConditionsClientApplications {
	ExcludedServicePrincipals: *[]*string,
	IncludedServicePrincipals: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplications.property.excludedServicePrincipals">ExcludedServicePrincipals</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#excluded_service_principals ConditionalAccessPolicy#excluded_service_principals}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplications.property.includedServicePrincipals">IncludedServicePrincipals</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#included_service_principals ConditionalAccessPolicy#included_service_principals}. |

---

##### `ExcludedServicePrincipals`<sup>Optional</sup> <a name="ExcludedServicePrincipals" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplications.property.excludedServicePrincipals"></a>

```go
ExcludedServicePrincipals *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#excluded_service_principals ConditionalAccessPolicy#excluded_service_principals}.

---

##### `IncludedServicePrincipals`<sup>Optional</sup> <a name="IncludedServicePrincipals" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplications.property.includedServicePrincipals"></a>

```go
IncludedServicePrincipals *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#included_service_principals ConditionalAccessPolicy#included_service_principals}.

---

### ConditionalAccessPolicyConditionsDevices <a name="ConditionalAccessPolicyConditionsDevices" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

&conditionalaccesspolicy.ConditionalAccessPolicyConditionsDevices {
	Filter: github.com/cdktf/cdktf-provider-azuread-go/azuread/v11.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter">ConditionalAccessPolicyConditionsDevicesFilter</a></code> | filter block. |

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices.property.filter"></a>

```go
Filter ConditionalAccessPolicyConditionsDevicesFilter
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter">ConditionalAccessPolicyConditionsDevicesFilter</a>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#filter ConditionalAccessPolicy#filter}

---

### ConditionalAccessPolicyConditionsDevicesFilter <a name="ConditionalAccessPolicyConditionsDevicesFilter" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

&conditionalaccesspolicy.ConditionalAccessPolicyConditionsDevicesFilter {
	Mode: *string,
	Rule: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#mode ConditionalAccessPolicy#mode}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter.property.rule">Rule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#rule ConditionalAccessPolicy#rule}. |

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#mode ConditionalAccessPolicy#mode}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter.property.rule"></a>

```go
Rule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#rule ConditionalAccessPolicy#rule}.

---

### ConditionalAccessPolicyConditionsLocations <a name="ConditionalAccessPolicyConditionsLocations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

&conditionalaccesspolicy.ConditionalAccessPolicyConditionsLocations {
	IncludedLocations: *[]*string,
	ExcludedLocations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations.property.includedLocations">IncludedLocations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#included_locations ConditionalAccessPolicy#included_locations}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations.property.excludedLocations">ExcludedLocations</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#excluded_locations ConditionalAccessPolicy#excluded_locations}. |

---

##### `IncludedLocations`<sup>Required</sup> <a name="IncludedLocations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations.property.includedLocations"></a>

```go
IncludedLocations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#included_locations ConditionalAccessPolicy#included_locations}.

---

##### `ExcludedLocations`<sup>Optional</sup> <a name="ExcludedLocations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations.property.excludedLocations"></a>

```go
ExcludedLocations *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#excluded_locations ConditionalAccessPolicy#excluded_locations}.

---

### ConditionalAccessPolicyConditionsPlatforms <a name="ConditionalAccessPolicyConditionsPlatforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

&conditionalaccesspolicy.ConditionalAccessPolicyConditionsPlatforms {
	IncludedPlatforms: *[]*string,
	ExcludedPlatforms: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms.property.includedPlatforms">IncludedPlatforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#included_platforms ConditionalAccessPolicy#included_platforms}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms.property.excludedPlatforms">ExcludedPlatforms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#excluded_platforms ConditionalAccessPolicy#excluded_platforms}. |

---

##### `IncludedPlatforms`<sup>Required</sup> <a name="IncludedPlatforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms.property.includedPlatforms"></a>

```go
IncludedPlatforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#included_platforms ConditionalAccessPolicy#included_platforms}.

---

##### `ExcludedPlatforms`<sup>Optional</sup> <a name="ExcludedPlatforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms.property.excludedPlatforms"></a>

```go
ExcludedPlatforms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#excluded_platforms ConditionalAccessPolicy#excluded_platforms}.

---

### ConditionalAccessPolicyConditionsUsers <a name="ConditionalAccessPolicyConditionsUsers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

&conditionalaccesspolicy.ConditionalAccessPolicyConditionsUsers {
	ExcludedGroups: *[]*string,
	ExcludedRoles: *[]*string,
	ExcludedUsers: *[]*string,
	IncludedGroups: *[]*string,
	IncludedRoles: *[]*string,
	IncludedUsers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.excludedGroups">ExcludedGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#excluded_groups ConditionalAccessPolicy#excluded_groups}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.excludedRoles">ExcludedRoles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#excluded_roles ConditionalAccessPolicy#excluded_roles}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.excludedUsers">ExcludedUsers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#excluded_users ConditionalAccessPolicy#excluded_users}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.includedGroups">IncludedGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#included_groups ConditionalAccessPolicy#included_groups}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.includedRoles">IncludedRoles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#included_roles ConditionalAccessPolicy#included_roles}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.includedUsers">IncludedUsers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#included_users ConditionalAccessPolicy#included_users}. |

---

##### `ExcludedGroups`<sup>Optional</sup> <a name="ExcludedGroups" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.excludedGroups"></a>

```go
ExcludedGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#excluded_groups ConditionalAccessPolicy#excluded_groups}.

---

##### `ExcludedRoles`<sup>Optional</sup> <a name="ExcludedRoles" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.excludedRoles"></a>

```go
ExcludedRoles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#excluded_roles ConditionalAccessPolicy#excluded_roles}.

---

##### `ExcludedUsers`<sup>Optional</sup> <a name="ExcludedUsers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.excludedUsers"></a>

```go
ExcludedUsers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#excluded_users ConditionalAccessPolicy#excluded_users}.

---

##### `IncludedGroups`<sup>Optional</sup> <a name="IncludedGroups" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.includedGroups"></a>

```go
IncludedGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#included_groups ConditionalAccessPolicy#included_groups}.

---

##### `IncludedRoles`<sup>Optional</sup> <a name="IncludedRoles" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.includedRoles"></a>

```go
IncludedRoles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#included_roles ConditionalAccessPolicy#included_roles}.

---

##### `IncludedUsers`<sup>Optional</sup> <a name="IncludedUsers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers.property.includedUsers"></a>

```go
IncludedUsers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#included_users ConditionalAccessPolicy#included_users}.

---

### ConditionalAccessPolicyConfig <a name="ConditionalAccessPolicyConfig" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

&conditionalaccesspolicy.ConditionalAccessPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Conditions: github.com/cdktf/cdktf-provider-azuread-go/azuread/v11.conditionalAccessPolicy.ConditionalAccessPolicyConditions,
	DisplayName: *string,
	State: *string,
	GrantControls: github.com/cdktf/cdktf-provider-azuread-go/azuread/v11.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls,
	Id: *string,
	SessionControls: github.com/cdktf/cdktf-provider-azuread-go/azuread/v11.conditionalAccessPolicy.ConditionalAccessPolicySessionControls,
	Timeouts: github.com/cdktf/cdktf-provider-azuread-go/azuread/v11.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions">ConditionalAccessPolicyConditions</a></code> | conditions block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#display_name ConditionalAccessPolicy#display_name}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#state ConditionalAccessPolicy#state}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.grantControls">GrantControls</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls">ConditionalAccessPolicyGrantControls</a></code> | grant_controls block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#id ConditionalAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.sessionControls">SessionControls</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls">ConditionalAccessPolicySessionControls</a></code> | session_controls block. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts">ConditionalAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.conditions"></a>

```go
Conditions ConditionalAccessPolicyConditions
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions">ConditionalAccessPolicyConditions</a>

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#conditions ConditionalAccessPolicy#conditions}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#display_name ConditionalAccessPolicy#display_name}.

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#state ConditionalAccessPolicy#state}.

---

##### `GrantControls`<sup>Optional</sup> <a name="GrantControls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.grantControls"></a>

```go
GrantControls ConditionalAccessPolicyGrantControls
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls">ConditionalAccessPolicyGrantControls</a>

grant_controls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#grant_controls ConditionalAccessPolicy#grant_controls}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#id ConditionalAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SessionControls`<sup>Optional</sup> <a name="SessionControls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.sessionControls"></a>

```go
SessionControls ConditionalAccessPolicySessionControls
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls">ConditionalAccessPolicySessionControls</a>

session_controls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#session_controls ConditionalAccessPolicy#session_controls}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConfig.property.timeouts"></a>

```go
Timeouts ConditionalAccessPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts">ConditionalAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#timeouts ConditionalAccessPolicy#timeouts}

---

### ConditionalAccessPolicyGrantControls <a name="ConditionalAccessPolicyGrantControls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

&conditionalaccesspolicy.ConditionalAccessPolicyGrantControls {
	Operator: *string,
	AuthenticationStrengthPolicyId: *string,
	BuiltInControls: *[]*string,
	CustomAuthenticationFactors: *[]*string,
	TermsOfUse: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#operator ConditionalAccessPolicy#operator}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.authenticationStrengthPolicyId">AuthenticationStrengthPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#authentication_strength_policy_id ConditionalAccessPolicy#authentication_strength_policy_id}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.builtInControls">BuiltInControls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#built_in_controls ConditionalAccessPolicy#built_in_controls}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.customAuthenticationFactors">CustomAuthenticationFactors</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#custom_authentication_factors ConditionalAccessPolicy#custom_authentication_factors}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.termsOfUse">TermsOfUse</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#terms_of_use ConditionalAccessPolicy#terms_of_use}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#operator ConditionalAccessPolicy#operator}.

---

##### `AuthenticationStrengthPolicyId`<sup>Optional</sup> <a name="AuthenticationStrengthPolicyId" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.authenticationStrengthPolicyId"></a>

```go
AuthenticationStrengthPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#authentication_strength_policy_id ConditionalAccessPolicy#authentication_strength_policy_id}.

---

##### `BuiltInControls`<sup>Optional</sup> <a name="BuiltInControls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.builtInControls"></a>

```go
BuiltInControls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#built_in_controls ConditionalAccessPolicy#built_in_controls}.

---

##### `CustomAuthenticationFactors`<sup>Optional</sup> <a name="CustomAuthenticationFactors" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.customAuthenticationFactors"></a>

```go
CustomAuthenticationFactors *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#custom_authentication_factors ConditionalAccessPolicy#custom_authentication_factors}.

---

##### `TermsOfUse`<sup>Optional</sup> <a name="TermsOfUse" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls.property.termsOfUse"></a>

```go
TermsOfUse *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#terms_of_use ConditionalAccessPolicy#terms_of_use}.

---

### ConditionalAccessPolicySessionControls <a name="ConditionalAccessPolicySessionControls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

&conditionalaccesspolicy.ConditionalAccessPolicySessionControls {
	ApplicationEnforcedRestrictionsEnabled: interface{},
	CloudAppSecurityPolicy: *string,
	DisableResilienceDefaults: interface{},
	PersistentBrowserMode: *string,
	SignInFrequency: *f64,
	SignInFrequencyPeriod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.applicationEnforcedRestrictionsEnabled">ApplicationEnforcedRestrictionsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#application_enforced_restrictions_enabled ConditionalAccessPolicy#application_enforced_restrictions_enabled}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.cloudAppSecurityPolicy">CloudAppSecurityPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#cloud_app_security_policy ConditionalAccessPolicy#cloud_app_security_policy}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.disableResilienceDefaults">DisableResilienceDefaults</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#disable_resilience_defaults ConditionalAccessPolicy#disable_resilience_defaults}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.persistentBrowserMode">PersistentBrowserMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#persistent_browser_mode ConditionalAccessPolicy#persistent_browser_mode}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.signInFrequency">SignInFrequency</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#sign_in_frequency ConditionalAccessPolicy#sign_in_frequency}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.signInFrequencyPeriod">SignInFrequencyPeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#sign_in_frequency_period ConditionalAccessPolicy#sign_in_frequency_period}. |

---

##### `ApplicationEnforcedRestrictionsEnabled`<sup>Optional</sup> <a name="ApplicationEnforcedRestrictionsEnabled" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.applicationEnforcedRestrictionsEnabled"></a>

```go
ApplicationEnforcedRestrictionsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#application_enforced_restrictions_enabled ConditionalAccessPolicy#application_enforced_restrictions_enabled}.

---

##### `CloudAppSecurityPolicy`<sup>Optional</sup> <a name="CloudAppSecurityPolicy" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.cloudAppSecurityPolicy"></a>

```go
CloudAppSecurityPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#cloud_app_security_policy ConditionalAccessPolicy#cloud_app_security_policy}.

---

##### `DisableResilienceDefaults`<sup>Optional</sup> <a name="DisableResilienceDefaults" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.disableResilienceDefaults"></a>

```go
DisableResilienceDefaults interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#disable_resilience_defaults ConditionalAccessPolicy#disable_resilience_defaults}.

---

##### `PersistentBrowserMode`<sup>Optional</sup> <a name="PersistentBrowserMode" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.persistentBrowserMode"></a>

```go
PersistentBrowserMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#persistent_browser_mode ConditionalAccessPolicy#persistent_browser_mode}.

---

##### `SignInFrequency`<sup>Optional</sup> <a name="SignInFrequency" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.signInFrequency"></a>

```go
SignInFrequency *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#sign_in_frequency ConditionalAccessPolicy#sign_in_frequency}.

---

##### `SignInFrequencyPeriod`<sup>Optional</sup> <a name="SignInFrequencyPeriod" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls.property.signInFrequencyPeriod"></a>

```go
SignInFrequencyPeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#sign_in_frequency_period ConditionalAccessPolicy#sign_in_frequency_period}.

---

### ConditionalAccessPolicyTimeouts <a name="ConditionalAccessPolicyTimeouts" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

&conditionalaccesspolicy.ConditionalAccessPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#create ConditionalAccessPolicy#create}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#delete ConditionalAccessPolicy#delete}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#read ConditionalAccessPolicy#read}. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#update ConditionalAccessPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#create ConditionalAccessPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#delete ConditionalAccessPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#read ConditionalAccessPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/2.44.1/docs/resources/conditional_access_policy#update ConditionalAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConditionalAccessPolicyConditionsApplicationsOutputReference <a name="ConditionalAccessPolicyConditionsApplicationsOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

conditionalaccesspolicy.NewConditionalAccessPolicyConditionsApplicationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConditionalAccessPolicyConditionsApplicationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resetExcludedApplications">ResetExcludedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resetIncludedApplications">ResetIncludedApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resetIncludedUserActions">ResetIncludedUserActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedApplications` <a name="ResetExcludedApplications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resetExcludedApplications"></a>

```go
func ResetExcludedApplications()
```

##### `ResetIncludedApplications` <a name="ResetIncludedApplications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resetIncludedApplications"></a>

```go
func ResetIncludedApplications()
```

##### `ResetIncludedUserActions` <a name="ResetIncludedUserActions" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.resetIncludedUserActions"></a>

```go
func ResetIncludedUserActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.excludedApplicationsInput">ExcludedApplicationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.includedApplicationsInput">IncludedApplicationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.includedUserActionsInput">IncludedUserActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.excludedApplications">ExcludedApplications</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.includedApplications">IncludedApplications</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.includedUserActions">IncludedUserActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications">ConditionalAccessPolicyConditionsApplications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedApplicationsInput`<sup>Optional</sup> <a name="ExcludedApplicationsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.excludedApplicationsInput"></a>

```go
func ExcludedApplicationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedApplicationsInput`<sup>Optional</sup> <a name="IncludedApplicationsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.includedApplicationsInput"></a>

```go
func IncludedApplicationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedUserActionsInput`<sup>Optional</sup> <a name="IncludedUserActionsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.includedUserActionsInput"></a>

```go
func IncludedUserActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedApplications`<sup>Required</sup> <a name="ExcludedApplications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.excludedApplications"></a>

```go
func ExcludedApplications() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedApplications`<sup>Required</sup> <a name="IncludedApplications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.includedApplications"></a>

```go
func IncludedApplications() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedUserActions`<sup>Required</sup> <a name="IncludedUserActions" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.includedUserActions"></a>

```go
func IncludedUserActions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference.property.internalValue"></a>

```go
func InternalValue() ConditionalAccessPolicyConditionsApplications
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications">ConditionalAccessPolicyConditionsApplications</a>

---


### ConditionalAccessPolicyConditionsClientApplicationsOutputReference <a name="ConditionalAccessPolicyConditionsClientApplicationsOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

conditionalaccesspolicy.NewConditionalAccessPolicyConditionsClientApplicationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConditionalAccessPolicyConditionsClientApplicationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.resetExcludedServicePrincipals">ResetExcludedServicePrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.resetIncludedServicePrincipals">ResetIncludedServicePrincipals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedServicePrincipals` <a name="ResetExcludedServicePrincipals" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.resetExcludedServicePrincipals"></a>

```go
func ResetExcludedServicePrincipals()
```

##### `ResetIncludedServicePrincipals` <a name="ResetIncludedServicePrincipals" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.resetIncludedServicePrincipals"></a>

```go
func ResetIncludedServicePrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.property.excludedServicePrincipalsInput">ExcludedServicePrincipalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.property.includedServicePrincipalsInput">IncludedServicePrincipalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.property.excludedServicePrincipals">ExcludedServicePrincipals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.property.includedServicePrincipals">IncludedServicePrincipals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplications">ConditionalAccessPolicyConditionsClientApplications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedServicePrincipalsInput`<sup>Optional</sup> <a name="ExcludedServicePrincipalsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.property.excludedServicePrincipalsInput"></a>

```go
func ExcludedServicePrincipalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedServicePrincipalsInput`<sup>Optional</sup> <a name="IncludedServicePrincipalsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.property.includedServicePrincipalsInput"></a>

```go
func IncludedServicePrincipalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedServicePrincipals`<sup>Required</sup> <a name="ExcludedServicePrincipals" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.property.excludedServicePrincipals"></a>

```go
func ExcludedServicePrincipals() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedServicePrincipals`<sup>Required</sup> <a name="IncludedServicePrincipals" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.property.includedServicePrincipals"></a>

```go
func IncludedServicePrincipals() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference.property.internalValue"></a>

```go
func InternalValue() ConditionalAccessPolicyConditionsClientApplications
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplications">ConditionalAccessPolicyConditionsClientApplications</a>

---


### ConditionalAccessPolicyConditionsDevicesFilterOutputReference <a name="ConditionalAccessPolicyConditionsDevicesFilterOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

conditionalaccesspolicy.NewConditionalAccessPolicyConditionsDevicesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConditionalAccessPolicyConditionsDevicesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.ruleInput">RuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.rule">Rule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter">ConditionalAccessPolicyConditionsDevicesFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.ruleInput"></a>

```go
func RuleInput() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.rule"></a>

```go
func Rule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() ConditionalAccessPolicyConditionsDevicesFilter
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter">ConditionalAccessPolicyConditionsDevicesFilter</a>

---


### ConditionalAccessPolicyConditionsDevicesOutputReference <a name="ConditionalAccessPolicyConditionsDevicesOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

conditionalaccesspolicy.NewConditionalAccessPolicyConditionsDevicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConditionalAccessPolicyConditionsDevicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.putFilter"></a>

```go
func PutFilter(value ConditionalAccessPolicyConditionsDevicesFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter">ConditionalAccessPolicyConditionsDevicesFilter</a>

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.resetFilter"></a>

```go
func ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference">ConditionalAccessPolicyConditionsDevicesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.filterInput">FilterInput</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter">ConditionalAccessPolicyConditionsDevicesFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices">ConditionalAccessPolicyConditionsDevices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.filter"></a>

```go
func Filter() ConditionalAccessPolicyConditionsDevicesFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilterOutputReference">ConditionalAccessPolicyConditionsDevicesFilterOutputReference</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.filterInput"></a>

```go
func FilterInput() ConditionalAccessPolicyConditionsDevicesFilter
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesFilter">ConditionalAccessPolicyConditionsDevicesFilter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference.property.internalValue"></a>

```go
func InternalValue() ConditionalAccessPolicyConditionsDevices
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices">ConditionalAccessPolicyConditionsDevices</a>

---


### ConditionalAccessPolicyConditionsLocationsOutputReference <a name="ConditionalAccessPolicyConditionsLocationsOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

conditionalaccesspolicy.NewConditionalAccessPolicyConditionsLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConditionalAccessPolicyConditionsLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.resetExcludedLocations">ResetExcludedLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedLocations` <a name="ResetExcludedLocations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.resetExcludedLocations"></a>

```go
func ResetExcludedLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.excludedLocationsInput">ExcludedLocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.includedLocationsInput">IncludedLocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.excludedLocations">ExcludedLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.includedLocations">IncludedLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations">ConditionalAccessPolicyConditionsLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedLocationsInput`<sup>Optional</sup> <a name="ExcludedLocationsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.excludedLocationsInput"></a>

```go
func ExcludedLocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedLocationsInput`<sup>Optional</sup> <a name="IncludedLocationsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.includedLocationsInput"></a>

```go
func IncludedLocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedLocations`<sup>Required</sup> <a name="ExcludedLocations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.excludedLocations"></a>

```go
func ExcludedLocations() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedLocations`<sup>Required</sup> <a name="IncludedLocations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.includedLocations"></a>

```go
func IncludedLocations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() ConditionalAccessPolicyConditionsLocations
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations">ConditionalAccessPolicyConditionsLocations</a>

---


### ConditionalAccessPolicyConditionsOutputReference <a name="ConditionalAccessPolicyConditionsOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

conditionalaccesspolicy.NewConditionalAccessPolicyConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConditionalAccessPolicyConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putApplications">PutApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putClientApplications">PutClientApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putDevices">PutDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putLocations">PutLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putPlatforms">PutPlatforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putUsers">PutUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetClientApplications">ResetClientApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetDevices">ResetDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetLocations">ResetLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetPlatforms">ResetPlatforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetServicePrincipalRiskLevels">ResetServicePrincipalRiskLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetSignInRiskLevels">ResetSignInRiskLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetUserRiskLevels">ResetUserRiskLevels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplications` <a name="PutApplications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putApplications"></a>

```go
func PutApplications(value ConditionalAccessPolicyConditionsApplications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putApplications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications">ConditionalAccessPolicyConditionsApplications</a>

---

##### `PutClientApplications` <a name="PutClientApplications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putClientApplications"></a>

```go
func PutClientApplications(value ConditionalAccessPolicyConditionsClientApplications)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putClientApplications.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplications">ConditionalAccessPolicyConditionsClientApplications</a>

---

##### `PutDevices` <a name="PutDevices" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putDevices"></a>

```go
func PutDevices(value ConditionalAccessPolicyConditionsDevices)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putDevices.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices">ConditionalAccessPolicyConditionsDevices</a>

---

##### `PutLocations` <a name="PutLocations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putLocations"></a>

```go
func PutLocations(value ConditionalAccessPolicyConditionsLocations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations">ConditionalAccessPolicyConditionsLocations</a>

---

##### `PutPlatforms` <a name="PutPlatforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putPlatforms"></a>

```go
func PutPlatforms(value ConditionalAccessPolicyConditionsPlatforms)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putPlatforms.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms">ConditionalAccessPolicyConditionsPlatforms</a>

---

##### `PutUsers` <a name="PutUsers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putUsers"></a>

```go
func PutUsers(value ConditionalAccessPolicyConditionsUsers)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.putUsers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers">ConditionalAccessPolicyConditionsUsers</a>

---

##### `ResetClientApplications` <a name="ResetClientApplications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetClientApplications"></a>

```go
func ResetClientApplications()
```

##### `ResetDevices` <a name="ResetDevices" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetDevices"></a>

```go
func ResetDevices()
```

##### `ResetLocations` <a name="ResetLocations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetLocations"></a>

```go
func ResetLocations()
```

##### `ResetPlatforms` <a name="ResetPlatforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetPlatforms"></a>

```go
func ResetPlatforms()
```

##### `ResetServicePrincipalRiskLevels` <a name="ResetServicePrincipalRiskLevels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetServicePrincipalRiskLevels"></a>

```go
func ResetServicePrincipalRiskLevels()
```

##### `ResetSignInRiskLevels` <a name="ResetSignInRiskLevels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetSignInRiskLevels"></a>

```go
func ResetSignInRiskLevels()
```

##### `ResetUserRiskLevels` <a name="ResetUserRiskLevels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.resetUserRiskLevels"></a>

```go
func ResetUserRiskLevels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.applications">Applications</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference">ConditionalAccessPolicyConditionsApplicationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.clientApplications">ClientApplications</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference">ConditionalAccessPolicyConditionsClientApplicationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.devices">Devices</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference">ConditionalAccessPolicyConditionsDevicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.locations">Locations</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference">ConditionalAccessPolicyConditionsLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.platforms">Platforms</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference">ConditionalAccessPolicyConditionsPlatformsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.users">Users</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference">ConditionalAccessPolicyConditionsUsersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.applicationsInput">ApplicationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications">ConditionalAccessPolicyConditionsApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.clientApplicationsInput">ClientApplicationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplications">ConditionalAccessPolicyConditionsClientApplications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.clientAppTypesInput">ClientAppTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.devicesInput">DevicesInput</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices">ConditionalAccessPolicyConditionsDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.locationsInput">LocationsInput</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations">ConditionalAccessPolicyConditionsLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.platformsInput">PlatformsInput</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms">ConditionalAccessPolicyConditionsPlatforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.servicePrincipalRiskLevelsInput">ServicePrincipalRiskLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.signInRiskLevelsInput">SignInRiskLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.userRiskLevelsInput">UserRiskLevelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.usersInput">UsersInput</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers">ConditionalAccessPolicyConditionsUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.clientAppTypes">ClientAppTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.servicePrincipalRiskLevels">ServicePrincipalRiskLevels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.signInRiskLevels">SignInRiskLevels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.userRiskLevels">UserRiskLevels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions">ConditionalAccessPolicyConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Applications`<sup>Required</sup> <a name="Applications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.applications"></a>

```go
func Applications() ConditionalAccessPolicyConditionsApplicationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplicationsOutputReference">ConditionalAccessPolicyConditionsApplicationsOutputReference</a>

---

##### `ClientApplications`<sup>Required</sup> <a name="ClientApplications" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.clientApplications"></a>

```go
func ClientApplications() ConditionalAccessPolicyConditionsClientApplicationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplicationsOutputReference">ConditionalAccessPolicyConditionsClientApplicationsOutputReference</a>

---

##### `Devices`<sup>Required</sup> <a name="Devices" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.devices"></a>

```go
func Devices() ConditionalAccessPolicyConditionsDevicesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevicesOutputReference">ConditionalAccessPolicyConditionsDevicesOutputReference</a>

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.locations"></a>

```go
func Locations() ConditionalAccessPolicyConditionsLocationsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocationsOutputReference">ConditionalAccessPolicyConditionsLocationsOutputReference</a>

---

##### `Platforms`<sup>Required</sup> <a name="Platforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.platforms"></a>

```go
func Platforms() ConditionalAccessPolicyConditionsPlatformsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference">ConditionalAccessPolicyConditionsPlatformsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.users"></a>

```go
func Users() ConditionalAccessPolicyConditionsUsersOutputReference
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference">ConditionalAccessPolicyConditionsUsersOutputReference</a>

---

##### `ApplicationsInput`<sup>Optional</sup> <a name="ApplicationsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.applicationsInput"></a>

```go
func ApplicationsInput() ConditionalAccessPolicyConditionsApplications
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsApplications">ConditionalAccessPolicyConditionsApplications</a>

---

##### `ClientApplicationsInput`<sup>Optional</sup> <a name="ClientApplicationsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.clientApplicationsInput"></a>

```go
func ClientApplicationsInput() ConditionalAccessPolicyConditionsClientApplications
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsClientApplications">ConditionalAccessPolicyConditionsClientApplications</a>

---

##### `ClientAppTypesInput`<sup>Optional</sup> <a name="ClientAppTypesInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.clientAppTypesInput"></a>

```go
func ClientAppTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DevicesInput`<sup>Optional</sup> <a name="DevicesInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.devicesInput"></a>

```go
func DevicesInput() ConditionalAccessPolicyConditionsDevices
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsDevices">ConditionalAccessPolicyConditionsDevices</a>

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.locationsInput"></a>

```go
func LocationsInput() ConditionalAccessPolicyConditionsLocations
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsLocations">ConditionalAccessPolicyConditionsLocations</a>

---

##### `PlatformsInput`<sup>Optional</sup> <a name="PlatformsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.platformsInput"></a>

```go
func PlatformsInput() ConditionalAccessPolicyConditionsPlatforms
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms">ConditionalAccessPolicyConditionsPlatforms</a>

---

##### `ServicePrincipalRiskLevelsInput`<sup>Optional</sup> <a name="ServicePrincipalRiskLevelsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.servicePrincipalRiskLevelsInput"></a>

```go
func ServicePrincipalRiskLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SignInRiskLevelsInput`<sup>Optional</sup> <a name="SignInRiskLevelsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.signInRiskLevelsInput"></a>

```go
func SignInRiskLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserRiskLevelsInput`<sup>Optional</sup> <a name="UserRiskLevelsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.userRiskLevelsInput"></a>

```go
func UserRiskLevelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.usersInput"></a>

```go
func UsersInput() ConditionalAccessPolicyConditionsUsers
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers">ConditionalAccessPolicyConditionsUsers</a>

---

##### `ClientAppTypes`<sup>Required</sup> <a name="ClientAppTypes" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.clientAppTypes"></a>

```go
func ClientAppTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ServicePrincipalRiskLevels`<sup>Required</sup> <a name="ServicePrincipalRiskLevels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.servicePrincipalRiskLevels"></a>

```go
func ServicePrincipalRiskLevels() *[]*string
```

- *Type:* *[]*string

---

##### `SignInRiskLevels`<sup>Required</sup> <a name="SignInRiskLevels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.signInRiskLevels"></a>

```go
func SignInRiskLevels() *[]*string
```

- *Type:* *[]*string

---

##### `UserRiskLevels`<sup>Required</sup> <a name="UserRiskLevels" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.userRiskLevels"></a>

```go
func UserRiskLevels() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ConditionalAccessPolicyConditions
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditions">ConditionalAccessPolicyConditions</a>

---


### ConditionalAccessPolicyConditionsPlatformsOutputReference <a name="ConditionalAccessPolicyConditionsPlatformsOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

conditionalaccesspolicy.NewConditionalAccessPolicyConditionsPlatformsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConditionalAccessPolicyConditionsPlatformsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.resetExcludedPlatforms">ResetExcludedPlatforms</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedPlatforms` <a name="ResetExcludedPlatforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.resetExcludedPlatforms"></a>

```go
func ResetExcludedPlatforms()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.excludedPlatformsInput">ExcludedPlatformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.includedPlatformsInput">IncludedPlatformsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.excludedPlatforms">ExcludedPlatforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.includedPlatforms">IncludedPlatforms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms">ConditionalAccessPolicyConditionsPlatforms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedPlatformsInput`<sup>Optional</sup> <a name="ExcludedPlatformsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.excludedPlatformsInput"></a>

```go
func ExcludedPlatformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedPlatformsInput`<sup>Optional</sup> <a name="IncludedPlatformsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.includedPlatformsInput"></a>

```go
func IncludedPlatformsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedPlatforms`<sup>Required</sup> <a name="ExcludedPlatforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.excludedPlatforms"></a>

```go
func ExcludedPlatforms() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedPlatforms`<sup>Required</sup> <a name="IncludedPlatforms" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.includedPlatforms"></a>

```go
func IncludedPlatforms() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatformsOutputReference.property.internalValue"></a>

```go
func InternalValue() ConditionalAccessPolicyConditionsPlatforms
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsPlatforms">ConditionalAccessPolicyConditionsPlatforms</a>

---


### ConditionalAccessPolicyConditionsUsersOutputReference <a name="ConditionalAccessPolicyConditionsUsersOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

conditionalaccesspolicy.NewConditionalAccessPolicyConditionsUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConditionalAccessPolicyConditionsUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetExcludedGroups">ResetExcludedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetExcludedRoles">ResetExcludedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetExcludedUsers">ResetExcludedUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetIncludedGroups">ResetIncludedGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetIncludedRoles">ResetIncludedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetIncludedUsers">ResetIncludedUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedGroups` <a name="ResetExcludedGroups" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetExcludedGroups"></a>

```go
func ResetExcludedGroups()
```

##### `ResetExcludedRoles` <a name="ResetExcludedRoles" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetExcludedRoles"></a>

```go
func ResetExcludedRoles()
```

##### `ResetExcludedUsers` <a name="ResetExcludedUsers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetExcludedUsers"></a>

```go
func ResetExcludedUsers()
```

##### `ResetIncludedGroups` <a name="ResetIncludedGroups" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetIncludedGroups"></a>

```go
func ResetIncludedGroups()
```

##### `ResetIncludedRoles` <a name="ResetIncludedRoles" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetIncludedRoles"></a>

```go
func ResetIncludedRoles()
```

##### `ResetIncludedUsers` <a name="ResetIncludedUsers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.resetIncludedUsers"></a>

```go
func ResetIncludedUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedGroupsInput">ExcludedGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedRolesInput">ExcludedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedUsersInput">ExcludedUsersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedGroupsInput">IncludedGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedRolesInput">IncludedRolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedUsersInput">IncludedUsersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedGroups">ExcludedGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedRoles">ExcludedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedUsers">ExcludedUsers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedGroups">IncludedGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedRoles">IncludedRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedUsers">IncludedUsers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers">ConditionalAccessPolicyConditionsUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedGroupsInput`<sup>Optional</sup> <a name="ExcludedGroupsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedGroupsInput"></a>

```go
func ExcludedGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedRolesInput`<sup>Optional</sup> <a name="ExcludedRolesInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedRolesInput"></a>

```go
func ExcludedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedUsersInput`<sup>Optional</sup> <a name="ExcludedUsersInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedUsersInput"></a>

```go
func ExcludedUsersInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedGroupsInput`<sup>Optional</sup> <a name="IncludedGroupsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedGroupsInput"></a>

```go
func IncludedGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedRolesInput`<sup>Optional</sup> <a name="IncludedRolesInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedRolesInput"></a>

```go
func IncludedRolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedUsersInput`<sup>Optional</sup> <a name="IncludedUsersInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedUsersInput"></a>

```go
func IncludedUsersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedGroups`<sup>Required</sup> <a name="ExcludedGroups" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedGroups"></a>

```go
func ExcludedGroups() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedRoles`<sup>Required</sup> <a name="ExcludedRoles" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedRoles"></a>

```go
func ExcludedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedUsers`<sup>Required</sup> <a name="ExcludedUsers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.excludedUsers"></a>

```go
func ExcludedUsers() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedGroups`<sup>Required</sup> <a name="IncludedGroups" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedGroups"></a>

```go
func IncludedGroups() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedRoles`<sup>Required</sup> <a name="IncludedRoles" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedRoles"></a>

```go
func IncludedRoles() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedUsers`<sup>Required</sup> <a name="IncludedUsers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.includedUsers"></a>

```go
func IncludedUsers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() ConditionalAccessPolicyConditionsUsers
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyConditionsUsers">ConditionalAccessPolicyConditionsUsers</a>

---


### ConditionalAccessPolicyGrantControlsOutputReference <a name="ConditionalAccessPolicyGrantControlsOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

conditionalaccesspolicy.NewConditionalAccessPolicyGrantControlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConditionalAccessPolicyGrantControlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resetAuthenticationStrengthPolicyId">ResetAuthenticationStrengthPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resetBuiltInControls">ResetBuiltInControls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resetCustomAuthenticationFactors">ResetCustomAuthenticationFactors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resetTermsOfUse">ResetTermsOfUse</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationStrengthPolicyId` <a name="ResetAuthenticationStrengthPolicyId" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resetAuthenticationStrengthPolicyId"></a>

```go
func ResetAuthenticationStrengthPolicyId()
```

##### `ResetBuiltInControls` <a name="ResetBuiltInControls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resetBuiltInControls"></a>

```go
func ResetBuiltInControls()
```

##### `ResetCustomAuthenticationFactors` <a name="ResetCustomAuthenticationFactors" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resetCustomAuthenticationFactors"></a>

```go
func ResetCustomAuthenticationFactors()
```

##### `ResetTermsOfUse` <a name="ResetTermsOfUse" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.resetTermsOfUse"></a>

```go
func ResetTermsOfUse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.authenticationStrengthPolicyIdInput">AuthenticationStrengthPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.builtInControlsInput">BuiltInControlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.customAuthenticationFactorsInput">CustomAuthenticationFactorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.termsOfUseInput">TermsOfUseInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.authenticationStrengthPolicyId">AuthenticationStrengthPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.builtInControls">BuiltInControls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.customAuthenticationFactors">CustomAuthenticationFactors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.termsOfUse">TermsOfUse</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls">ConditionalAccessPolicyGrantControls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationStrengthPolicyIdInput`<sup>Optional</sup> <a name="AuthenticationStrengthPolicyIdInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.authenticationStrengthPolicyIdInput"></a>

```go
func AuthenticationStrengthPolicyIdInput() *string
```

- *Type:* *string

---

##### `BuiltInControlsInput`<sup>Optional</sup> <a name="BuiltInControlsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.builtInControlsInput"></a>

```go
func BuiltInControlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomAuthenticationFactorsInput`<sup>Optional</sup> <a name="CustomAuthenticationFactorsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.customAuthenticationFactorsInput"></a>

```go
func CustomAuthenticationFactorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `TermsOfUseInput`<sup>Optional</sup> <a name="TermsOfUseInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.termsOfUseInput"></a>

```go
func TermsOfUseInput() *[]*string
```

- *Type:* *[]*string

---

##### `AuthenticationStrengthPolicyId`<sup>Required</sup> <a name="AuthenticationStrengthPolicyId" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.authenticationStrengthPolicyId"></a>

```go
func AuthenticationStrengthPolicyId() *string
```

- *Type:* *string

---

##### `BuiltInControls`<sup>Required</sup> <a name="BuiltInControls" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.builtInControls"></a>

```go
func BuiltInControls() *[]*string
```

- *Type:* *[]*string

---

##### `CustomAuthenticationFactors`<sup>Required</sup> <a name="CustomAuthenticationFactors" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.customAuthenticationFactors"></a>

```go
func CustomAuthenticationFactors() *[]*string
```

- *Type:* *[]*string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `TermsOfUse`<sup>Required</sup> <a name="TermsOfUse" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.termsOfUse"></a>

```go
func TermsOfUse() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControlsOutputReference.property.internalValue"></a>

```go
func InternalValue() ConditionalAccessPolicyGrantControls
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyGrantControls">ConditionalAccessPolicyGrantControls</a>

---


### ConditionalAccessPolicySessionControlsOutputReference <a name="ConditionalAccessPolicySessionControlsOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

conditionalaccesspolicy.NewConditionalAccessPolicySessionControlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConditionalAccessPolicySessionControlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetApplicationEnforcedRestrictionsEnabled">ResetApplicationEnforcedRestrictionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetCloudAppSecurityPolicy">ResetCloudAppSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetDisableResilienceDefaults">ResetDisableResilienceDefaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetPersistentBrowserMode">ResetPersistentBrowserMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetSignInFrequency">ResetSignInFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetSignInFrequencyPeriod">ResetSignInFrequencyPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationEnforcedRestrictionsEnabled` <a name="ResetApplicationEnforcedRestrictionsEnabled" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetApplicationEnforcedRestrictionsEnabled"></a>

```go
func ResetApplicationEnforcedRestrictionsEnabled()
```

##### `ResetCloudAppSecurityPolicy` <a name="ResetCloudAppSecurityPolicy" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetCloudAppSecurityPolicy"></a>

```go
func ResetCloudAppSecurityPolicy()
```

##### `ResetDisableResilienceDefaults` <a name="ResetDisableResilienceDefaults" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetDisableResilienceDefaults"></a>

```go
func ResetDisableResilienceDefaults()
```

##### `ResetPersistentBrowserMode` <a name="ResetPersistentBrowserMode" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetPersistentBrowserMode"></a>

```go
func ResetPersistentBrowserMode()
```

##### `ResetSignInFrequency` <a name="ResetSignInFrequency" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetSignInFrequency"></a>

```go
func ResetSignInFrequency()
```

##### `ResetSignInFrequencyPeriod` <a name="ResetSignInFrequencyPeriod" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.resetSignInFrequencyPeriod"></a>

```go
func ResetSignInFrequencyPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.applicationEnforcedRestrictionsEnabledInput">ApplicationEnforcedRestrictionsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.cloudAppSecurityPolicyInput">CloudAppSecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.disableResilienceDefaultsInput">DisableResilienceDefaultsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.persistentBrowserModeInput">PersistentBrowserModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.signInFrequencyInput">SignInFrequencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.signInFrequencyPeriodInput">SignInFrequencyPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.applicationEnforcedRestrictionsEnabled">ApplicationEnforcedRestrictionsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.cloudAppSecurityPolicy">CloudAppSecurityPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.disableResilienceDefaults">DisableResilienceDefaults</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.persistentBrowserMode">PersistentBrowserMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.signInFrequency">SignInFrequency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.signInFrequencyPeriod">SignInFrequencyPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls">ConditionalAccessPolicySessionControls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationEnforcedRestrictionsEnabledInput`<sup>Optional</sup> <a name="ApplicationEnforcedRestrictionsEnabledInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.applicationEnforcedRestrictionsEnabledInput"></a>

```go
func ApplicationEnforcedRestrictionsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CloudAppSecurityPolicyInput`<sup>Optional</sup> <a name="CloudAppSecurityPolicyInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.cloudAppSecurityPolicyInput"></a>

```go
func CloudAppSecurityPolicyInput() *string
```

- *Type:* *string

---

##### `DisableResilienceDefaultsInput`<sup>Optional</sup> <a name="DisableResilienceDefaultsInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.disableResilienceDefaultsInput"></a>

```go
func DisableResilienceDefaultsInput() interface{}
```

- *Type:* interface{}

---

##### `PersistentBrowserModeInput`<sup>Optional</sup> <a name="PersistentBrowserModeInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.persistentBrowserModeInput"></a>

```go
func PersistentBrowserModeInput() *string
```

- *Type:* *string

---

##### `SignInFrequencyInput`<sup>Optional</sup> <a name="SignInFrequencyInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.signInFrequencyInput"></a>

```go
func SignInFrequencyInput() *f64
```

- *Type:* *f64

---

##### `SignInFrequencyPeriodInput`<sup>Optional</sup> <a name="SignInFrequencyPeriodInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.signInFrequencyPeriodInput"></a>

```go
func SignInFrequencyPeriodInput() *string
```

- *Type:* *string

---

##### `ApplicationEnforcedRestrictionsEnabled`<sup>Required</sup> <a name="ApplicationEnforcedRestrictionsEnabled" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.applicationEnforcedRestrictionsEnabled"></a>

```go
func ApplicationEnforcedRestrictionsEnabled() interface{}
```

- *Type:* interface{}

---

##### `CloudAppSecurityPolicy`<sup>Required</sup> <a name="CloudAppSecurityPolicy" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.cloudAppSecurityPolicy"></a>

```go
func CloudAppSecurityPolicy() *string
```

- *Type:* *string

---

##### `DisableResilienceDefaults`<sup>Required</sup> <a name="DisableResilienceDefaults" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.disableResilienceDefaults"></a>

```go
func DisableResilienceDefaults() interface{}
```

- *Type:* interface{}

---

##### `PersistentBrowserMode`<sup>Required</sup> <a name="PersistentBrowserMode" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.persistentBrowserMode"></a>

```go
func PersistentBrowserMode() *string
```

- *Type:* *string

---

##### `SignInFrequency`<sup>Required</sup> <a name="SignInFrequency" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.signInFrequency"></a>

```go
func SignInFrequency() *f64
```

- *Type:* *f64

---

##### `SignInFrequencyPeriod`<sup>Required</sup> <a name="SignInFrequencyPeriod" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.signInFrequencyPeriod"></a>

```go
func SignInFrequencyPeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControlsOutputReference.property.internalValue"></a>

```go
func InternalValue() ConditionalAccessPolicySessionControls
```

- *Type:* <a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicySessionControls">ConditionalAccessPolicySessionControls</a>

---


### ConditionalAccessPolicyTimeoutsOutputReference <a name="ConditionalAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azuread-go/azuread/v11/conditionalaccesspolicy"

conditionalaccesspolicy.NewConditionalAccessPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConditionalAccessPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azuread.conditionalAccessPolicy.ConditionalAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



