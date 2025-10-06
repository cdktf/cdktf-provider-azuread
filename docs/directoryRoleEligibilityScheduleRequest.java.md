# `directoryRoleEligibilityScheduleRequest` Submodule <a name="`directoryRoleEligibilityScheduleRequest` Submodule" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryRoleEligibilityScheduleRequest <a name="DirectoryRoleEligibilityScheduleRequest" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request azuread_directory_role_eligibility_schedule_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.directory_role_eligibility_schedule_request.DirectoryRoleEligibilityScheduleRequest;

DirectoryRoleEligibilityScheduleRequest.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .directoryScopeId(java.lang.String)
    .justification(java.lang.String)
    .principalId(java.lang.String)
    .roleDefinitionId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DirectoryRoleEligibilityScheduleRequestTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.directoryScopeId">directoryScopeId</a></code> | <code>java.lang.String</code> | Identifier of the directory object representing the scope of the role eligibility schedule request. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.justification">justification</a></code> | <code>java.lang.String</code> | Justification for why the role is assigned. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.principalId">principalId</a></code> | <code>java.lang.String</code> | The object ID of the member principal. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.roleDefinitionId">roleDefinitionId</a></code> | <code>java.lang.String</code> | The object ID of the directory role for this role eligibility schedule request. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#id DirectoryRoleEligibilityScheduleRequest#id}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts">DirectoryRoleEligibilityScheduleRequestTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `directoryScopeId`<sup>Required</sup> <a name="directoryScopeId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.directoryScopeId"></a>

- *Type:* java.lang.String

Identifier of the directory object representing the scope of the role eligibility schedule request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#directory_scope_id DirectoryRoleEligibilityScheduleRequest#directory_scope_id}

---

##### `justification`<sup>Required</sup> <a name="justification" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.justification"></a>

- *Type:* java.lang.String

Justification for why the role is assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#justification DirectoryRoleEligibilityScheduleRequest#justification}

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.principalId"></a>

- *Type:* java.lang.String

The object ID of the member principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#principal_id DirectoryRoleEligibilityScheduleRequest#principal_id}

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.roleDefinitionId"></a>

- *Type:* java.lang.String

The object ID of the directory role for this role eligibility schedule request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#role_definition_id DirectoryRoleEligibilityScheduleRequest#role_definition_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#id DirectoryRoleEligibilityScheduleRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts">DirectoryRoleEligibilityScheduleRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#timeouts DirectoryRoleEligibilityScheduleRequest#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.putTimeouts"></a>

```java
public void putTimeouts(DirectoryRoleEligibilityScheduleRequestTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts">DirectoryRoleEligibilityScheduleRequestTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DirectoryRoleEligibilityScheduleRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azuread.directory_role_eligibility_schedule_request.DirectoryRoleEligibilityScheduleRequest;

DirectoryRoleEligibilityScheduleRequest.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azuread.directory_role_eligibility_schedule_request.DirectoryRoleEligibilityScheduleRequest;

DirectoryRoleEligibilityScheduleRequest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azuread.directory_role_eligibility_schedule_request.DirectoryRoleEligibilityScheduleRequest;

DirectoryRoleEligibilityScheduleRequest.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.azuread.directory_role_eligibility_schedule_request.DirectoryRoleEligibilityScheduleRequest;

DirectoryRoleEligibilityScheduleRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DirectoryRoleEligibilityScheduleRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DirectoryRoleEligibilityScheduleRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DirectoryRoleEligibilityScheduleRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DirectoryRoleEligibilityScheduleRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DirectoryRoleEligibilityScheduleRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference">DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.directoryScopeIdInput">directoryScopeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.justificationInput">justificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.principalIdInput">principalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.roleDefinitionIdInput">roleDefinitionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts">DirectoryRoleEligibilityScheduleRequestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.directoryScopeId">directoryScopeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.justification">justification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.principalId">principalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.roleDefinitionId">roleDefinitionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.timeouts"></a>

```java
public DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference">DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference</a>

---

##### `directoryScopeIdInput`<sup>Optional</sup> <a name="directoryScopeIdInput" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.directoryScopeIdInput"></a>

```java
public java.lang.String getDirectoryScopeIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `justificationInput`<sup>Optional</sup> <a name="justificationInput" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.justificationInput"></a>

```java
public java.lang.String getJustificationInput();
```

- *Type:* java.lang.String

---

##### `principalIdInput`<sup>Optional</sup> <a name="principalIdInput" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.principalIdInput"></a>

```java
public java.lang.String getPrincipalIdInput();
```

- *Type:* java.lang.String

---

##### `roleDefinitionIdInput`<sup>Optional</sup> <a name="roleDefinitionIdInput" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.roleDefinitionIdInput"></a>

```java
public java.lang.String getRoleDefinitionIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.timeoutsInput"></a>

```java
public IResolvable|DirectoryRoleEligibilityScheduleRequestTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts">DirectoryRoleEligibilityScheduleRequestTimeouts</a>

---

##### `directoryScopeId`<sup>Required</sup> <a name="directoryScopeId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.directoryScopeId"></a>

```java
public java.lang.String getDirectoryScopeId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `justification`<sup>Required</sup> <a name="justification" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.justification"></a>

```java
public java.lang.String getJustification();
```

- *Type:* java.lang.String

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.roleDefinitionId"></a>

```java
public java.lang.String getRoleDefinitionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryRoleEligibilityScheduleRequestConfig <a name="DirectoryRoleEligibilityScheduleRequestConfig" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.directory_role_eligibility_schedule_request.DirectoryRoleEligibilityScheduleRequestConfig;

DirectoryRoleEligibilityScheduleRequestConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .directoryScopeId(java.lang.String)
    .justification(java.lang.String)
    .principalId(java.lang.String)
    .roleDefinitionId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DirectoryRoleEligibilityScheduleRequestTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.directoryScopeId">directoryScopeId</a></code> | <code>java.lang.String</code> | Identifier of the directory object representing the scope of the role eligibility schedule request. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.justification">justification</a></code> | <code>java.lang.String</code> | Justification for why the role is assigned. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.principalId">principalId</a></code> | <code>java.lang.String</code> | The object ID of the member principal. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.roleDefinitionId">roleDefinitionId</a></code> | <code>java.lang.String</code> | The object ID of the directory role for this role eligibility schedule request. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#id DirectoryRoleEligibilityScheduleRequest#id}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts">DirectoryRoleEligibilityScheduleRequestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `directoryScopeId`<sup>Required</sup> <a name="directoryScopeId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.directoryScopeId"></a>

```java
public java.lang.String getDirectoryScopeId();
```

- *Type:* java.lang.String

Identifier of the directory object representing the scope of the role eligibility schedule request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#directory_scope_id DirectoryRoleEligibilityScheduleRequest#directory_scope_id}

---

##### `justification`<sup>Required</sup> <a name="justification" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.justification"></a>

```java
public java.lang.String getJustification();
```

- *Type:* java.lang.String

Justification for why the role is assigned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#justification DirectoryRoleEligibilityScheduleRequest#justification}

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.principalId"></a>

```java
public java.lang.String getPrincipalId();
```

- *Type:* java.lang.String

The object ID of the member principal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#principal_id DirectoryRoleEligibilityScheduleRequest#principal_id}

---

##### `roleDefinitionId`<sup>Required</sup> <a name="roleDefinitionId" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.roleDefinitionId"></a>

```java
public java.lang.String getRoleDefinitionId();
```

- *Type:* java.lang.String

The object ID of the directory role for this role eligibility schedule request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#role_definition_id DirectoryRoleEligibilityScheduleRequest#role_definition_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#id DirectoryRoleEligibilityScheduleRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestConfig.property.timeouts"></a>

```java
public DirectoryRoleEligibilityScheduleRequestTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts">DirectoryRoleEligibilityScheduleRequestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#timeouts DirectoryRoleEligibilityScheduleRequest#timeouts}

---

### DirectoryRoleEligibilityScheduleRequestTimeouts <a name="DirectoryRoleEligibilityScheduleRequestTimeouts" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.directory_role_eligibility_schedule_request.DirectoryRoleEligibilityScheduleRequestTimeouts;

DirectoryRoleEligibilityScheduleRequestTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#create DirectoryRoleEligibilityScheduleRequest#create}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#delete DirectoryRoleEligibilityScheduleRequest#delete}. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#read DirectoryRoleEligibilityScheduleRequest#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#create DirectoryRoleEligibilityScheduleRequest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#delete DirectoryRoleEligibilityScheduleRequest#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azuread/3.6.0/docs/resources/directory_role_eligibility_schedule_request#read DirectoryRoleEligibilityScheduleRequest#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference <a name="DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azuread.directory_role_eligibility_schedule_request.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference;

new DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts">DirectoryRoleEligibilityScheduleRequestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DirectoryRoleEligibilityScheduleRequestTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-azuread.directoryRoleEligibilityScheduleRequest.DirectoryRoleEligibilityScheduleRequestTimeouts">DirectoryRoleEligibilityScheduleRequestTimeouts</a>

---



