import { Stack } from "@mui/material";
import { CippWizardStepButtons } from "./CippWizardStepButtons";
import CippFormComponent from "../CippComponents/CippFormComponent";

export const CippTenantStep = (props) => {
  const {
    allTenants,
    type = "single",
    onNextStep,
    formControl,
    currentStep,
    onPreviousStep,
  } = props;
  return (
    <Stack spacing={3}>
      <label>Select a tenant</label>
      <CippFormComponent
        type="autoComplete"
        name="tenantFilter"
        formControl={formControl}
        placeholder="Select a tenant"
        api={{
          excludeTenantFilter: true,
          url: allTenants ? "/api/ListTenants" : "/api/ListTenants?AllTenantSelector=true",
          queryKey: "ListTenants",
          labelField: (option) => `${option.displayName} (${option.defaultDomainName})`,
          valueField: "customerId",
        }}
        multiple={type === "single" ? false : true}
        disableClearable={true}
        validators={{
          required: { value: true, message: "This field is required" },
        }}
      />
      <CippWizardStepButtons
        currentStep={currentStep}
        onPreviousStep={onPreviousStep}
        onNextStep={onNextStep}
        formControl={formControl}
      />
    </Stack>
  );
};