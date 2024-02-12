```terraform
resource "azapi_resource" "symbolicname" {
  type = "Microsoft.MachineLearningServices/workspaces/jobs@2023-10-01"
  name = "string"
  parent_id = "string"
  body = jsonencode({
    properties = {
      componentId = "string"
      computeId = "string"
      description = "string"
      displayName = "string"
      experimentName = "string"
      identity = {
        identityType = "string"
        // For remaining properties, see IdentityConfiguration objects
      }
      isArchived = bool
      properties = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      services = {
        {customized property} = {
          endpoint = "string"
          jobServiceType = "string"
          nodes = {
            nodesValueType = "string"
            // For remaining properties, see Nodes objects
          }
          port = int
          properties = {
            {customized property} = "string"
          }
        }
      }
      tags = {
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
        {customized property} = "string"
      }
      jobType = "string"
      // For remaining properties, see JobBaseProperties objects
    }
  })
}

```

### workspaces/jobs

| Name | Description | Value |
|-|-|-|
| name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
| parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
| properties | [Required] Additional attributes of the entity. | JobBaseProperties(required) |


### JobBaseProperties

| Name | Description | Value |
|-|-|-|
| componentId | ARM resource ID of the component resource. | string |
| computeId | ARM resource ID of the compute resource. | string |
| description | The asset description text. | string |
| displayName | Display name of job. | string |
| experimentName | The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment. | string |
| identity | Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.Defaults to AmlToken if null. | IdentityConfiguration |
| isArchived | Is the asset archived? | bool |
| properties | The asset property dictionary. | ResourceBaseProperties |
| services | List of JobEndpoints.For local jobs, a job endpoint will have an endpoint value of FileStreamObject. | JobBaseServices |
| tags | Tag dictionary. Tags can be added, removed, and updated. | object |
| jobType | Set the object type | AutoMLCommandPipelineSweep(required) |


### IdentityConfiguration

| Name | Description | Value |
|-|-|-|
| identityType | Set the object type | AMLTokenManagedUserIdentity(required) |


### AmlToken

| Name | Description | Value |
|-|-|-|
| identityType | [Required] Specifies the type of identity framework. | 'AMLToken' (required) |


### ManagedIdentity

| Name | Description | Value |
|-|-|-|
| identityType | [Required] Specifies the type of identity framework. | 'Managed' (required) |
| clientId | Specifies a user-assigned identity by client ID. For system-assigned, do not set this field. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| objectId | Specifies a user-assigned identity by object ID. For system-assigned, do not set this field. | stringConstraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
| resourceId | Specifies a user-assigned identity by ARM resource ID. For system-assigned, do not set this field. | string |


### UserIdentity

| Name | Description | Value |
|-|-|-|
| identityType | [Required] Specifies the type of identity framework. | 'UserIdentity' (required) |


### ResourceBaseProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |
| {customized property} |  | string |


### JobBaseServices

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobService |


### JobService

| Name | Description | Value |
|-|-|-|
| endpoint | Url for endpoint. | string |
| jobServiceType | Endpoint type. | string |
| nodes | Nodes that user would like to start the service on.If Nodes is not set or set to null, the service will only be started on leader node. | Nodes |
| port | Port for endpoint. | int |
| properties | Additional properties to set on the endpoint. | JobServiceProperties |


### Nodes

| Name | Description | Value |
|-|-|-|
| nodesValueType | Set the object type | All(required) |


### AllNodes

| Name | Description | Value |
|-|-|-|
| nodesValueType | [Required] Type of the Nodes value | 'All' (required) |


### JobServiceProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### AutoMLJob

| Name | Description | Value |
|-|-|-|
| jobType | [Required] Specifies the type of job. | 'AutoML' (required) |
| environmentId | The ARM resource ID of the Environment specification for the job.This is optional value to provide, if not provided, AutoML will default this to Production AutoML curated environment version when running the job. | string |
| environmentVariables | Environment variables included in the job. | AutoMLJobEnvironmentVariables |
| outputs | Mapping of output data bindings used in the job. | AutoMLJobOutputs |
| queueSettings | Queue settings for the job | QueueSettings |
| resources | Compute Resource configuration for the job. | JobResourceConfiguration |
| taskDetails | [Required] This represents scenario which can be one of Tables/NLP/Image | AutoMLVertical(required) |


### AutoMLJobEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### AutoMLJobOutputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobOutput |


### JobOutput

| Name | Description | Value |
|-|-|-|
| description | Description for the output. | string |
| jobOutputType | Set the object type | custom_modelmlflow_modelmltabletriton_modeluri_fileuri_folder(required) |


### CustomModelJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'custom_model' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### MLFlowModelJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'mlflow_model' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### MLTableJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'mltable' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### TritonModelJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'triton_model' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### UriFileJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'uri_file' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### UriFolderJobOutput

| Name | Description | Value |
|-|-|-|
| jobOutputType | [Required] Specifies the type of job. | 'uri_folder' (required) |
| mode | Output Asset Delivery Mode. | 'ReadWriteMount''Upload' |
| uri | Output Asset URI. | string |


### QueueSettings

| Name | Description | Value |
|-|-|-|
| jobTier | Controls the compute job tier | 'Basic''Null''Premium''Spot''Standard' |


### JobResourceConfiguration

| Name | Description | Value |
|-|-|-|
| dockerArgs | Extra arguments to pass to the Docker run command. This would override any parameters that have already been set by the system, or in this section. This parameter is only supported for Azure ML compute types. | string |
| instanceCount | Optional number of instances or nodes used by the compute target. | int |
| instanceType | Optional type of VM used as supported by the compute target. | string |
| properties | Additional properties bag. | ResourceConfigurationProperties |
| shmSize | Size of the docker container's shared memory block. This should be in the format of (number)(unit) where number as to be greater than 0 and the unit can be one of b(bytes), k(kilobytes), m(megabytes), or g(gigabytes). | stringConstraints:Pattern =\d+[bBkKmMgG] |


### ResourceConfigurationProperties

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |
| {customized property} |  | For Bicep, you can use theany()function. |


### AutoMLVertical

| Name | Description | Value |
|-|-|-|
| logVerbosity | Log verbosity for the job. | 'Critical''Debug''Error''Info''NotSet''Warning' |
| targetColumnName | Target column name: This is prediction values column.Also known as label column name in context of classification tasks. | string |
| trainingData | [Required] Training data input. | MLTableJobInput(required) |
| taskType | Set the object type | ClassificationForecastingImageClassificationImageClassificationMultilabelImageInstanceSegmentationImageObjectDetectionRegressionTextClassificationTextClassificationMultilabelTextNER(required) |


### MLTableJobInput

| Name | Description | Value |
|-|-|-|
| description | Description for the input. | string |
| jobInputType | [Required] Specifies the type of job. | 'custom_model''literal''mlflow_model''mltable''triton_model''uri_file''uri_folder' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### Classification

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'Classification' (required) |
| cvSplitColumnNames | Columns to use for CVSplit data. | string[] |
| featurizationSettings | Featurization inputs needed for AutoML job. | TableVerticalFeaturizationSettings |
| limitSettings | Execution constraints for AutoMLJob. | TableVerticalLimitSettings |
| nCrossValidations | Number of cross validation folds to be applied on training datasetwhen validation dataset is not provided. | NCrossValidations |
| positiveLabel | Positive label for binary metrics calculation. | string |
| primaryMetric | Primary metric for the task. | 'AUCWeighted''Accuracy''AveragePrecisionScoreWeighted''NormMacroRecall''PrecisionScoreWeighted' |
| testData | Test data input. | MLTableJobInput |
| testDataSize | The fraction of test dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| trainingSettings | Inputs for training phase for an AutoML Job. | ClassificationTrainingSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| weightColumnName | The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down. | string |


### TableVerticalFeaturizationSettings

| Name | Description | Value |
|-|-|-|
| blockedTransformers | These transformers shall not be used in featurization. | String array containing any of:'CatTargetEncoder''CountVectorizer''HashOneHotEncoder''LabelEncoder''NaiveBayes''OneHotEncoder''TextTargetEncoder''TfIdf''WoETargetEncoder''WordEmbedding' |
| columnNameAndTypes | Dictionary of column name and its type (int, float, string, datetime etc). | TableVerticalFeaturizationSettingsColumnNameAndTypes |
| datasetLanguage | Dataset language, useful for the text data. | string |
| enableDnnFeaturization | Determines whether to use Dnn based featurizers for data featurization. | bool |
| mode | Featurization mode - User can keep the default 'Auto' mode and AutoML will take care of necessary transformation of the data in featurization phase.If 'Off' is selected then no featurization is done.If 'Custom' is selected then user can specify additional inputs to customize how featurization is done. | 'Auto''Custom''Off' |
| transformerParams | User can specify additional transformers to be used along with the columns to which it would be applied and parameters for the transformer constructor. | TableVerticalFeaturizationSettingsTransformerParams |


### TableVerticalFeaturizationSettingsColumnNameAndTypes

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### TableVerticalFeaturizationSettingsTransformerParams

| Name | Description | Value |
|-|-|-|
| {customized property} |  | ColumnTransformer[] |


### ColumnTransformer

| Name | Description | Value |
|-|-|-|
| fields | Fields to apply transformer logic on. | string[] |
| parameters | Different properties to be passed to transformer.Input expected is dictionary of key,value pairs in JSON format. | For Bicep, you can use theany()function. |


### TableVerticalLimitSettings

| Name | Description | Value |
|-|-|-|
| enableEarlyTermination | Enable early termination, determines whether or not if AutoMLJob will terminate early if there is no score improvement in last 20 iterations. | bool |
| exitScore | Exit score for the AutoML job. | int |
| maxConcurrentTrials | Maximum Concurrent iterations. | int |
| maxCoresPerTrial | Max cores per iteration. | int |
| maxTrials | Number of iterations. | int |
| timeout | AutoML job timeout. | string |
| trialTimeout | Iteration timeout. | string |


### NCrossValidations

| Name | Description | Value |
|-|-|-|
| mode | Set the object type | AutoCustom(required) |


### AutoNCrossValidations

| Name | Description | Value |
|-|-|-|
| mode | [Required] Mode for determining N-Cross validations. | 'Auto' (required) |


### CustomNCrossValidations

| Name | Description | Value |
|-|-|-|
| mode | [Required] Mode for determining N-Cross validations. | 'Custom' (required) |
| value | [Required] N-Cross validations value. | int (required) |


### ClassificationTrainingSettings

| Name | Description | Value |
|-|-|-|
| allowedTrainingAlgorithms | Allowed models for classification task. | String array containing any of:'BernoulliNaiveBayes''DecisionTree''ExtremeRandomTrees''GradientBoosting''KNN''LightGBM''LinearSVM''LogisticRegression''MultinomialNaiveBayes''RandomForest''SGD''SVM''XGBoostClassifier' |
| blockedTrainingAlgorithms | Blocked models for classification task. | String array containing any of:'BernoulliNaiveBayes''DecisionTree''ExtremeRandomTrees''GradientBoosting''KNN''LightGBM''LinearSVM''LogisticRegression''MultinomialNaiveBayes''RandomForest''SGD''SVM''XGBoostClassifier' |
| enableDnnTraining | Enable recommendation of DNN models. | bool |
| enableModelExplainability | Flag to turn on explainability on best model. | bool |
| enableOnnxCompatibleModels | Flag for enabling onnx compatible models. | bool |
| enableStackEnsemble | Enable stack ensemble run. | bool |
| enableVoteEnsemble | Enable voting ensemble run. | bool |
| ensembleModelDownloadTimeout | During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.Configure this parameter with a higher value than 300 secs, if more time is needed. | string |
| stackEnsembleSettings | Stack ensemble settings for stack ensemble run. | StackEnsembleSettings |


### StackEnsembleSettings

| Name | Description | Value |
|-|-|-|
| stackMetaLearnerKWargs | Optional parameters to pass to the initializer of the meta-learner. | For Bicep, you can use theany()function. |
| stackMetaLearnerTrainPercentage | Specifies the proportion of the training set (when choosing train and validation type of training) to be reserved for training the meta-learner. Default value is 0.2. | int |
| stackMetaLearnerType | The meta-learner is a model trained on the output of the individual heterogeneous models. | 'ElasticNet''ElasticNetCV''LightGBMClassifier''LightGBMRegressor''LinearRegression''LogisticRegression''LogisticRegressionCV''None' |


### Forecasting

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'Forecasting' (required) |
| cvSplitColumnNames | Columns to use for CVSplit data. | string[] |
| featurizationSettings | Featurization inputs needed for AutoML job. | TableVerticalFeaturizationSettings |
| forecastingSettings | Forecasting task specific inputs. | ForecastingSettings |
| limitSettings | Execution constraints for AutoMLJob. | TableVerticalLimitSettings |
| nCrossValidations | Number of cross validation folds to be applied on training datasetwhen validation dataset is not provided. | NCrossValidations |
| primaryMetric | Primary metric for forecasting task. | 'NormalizedMeanAbsoluteError''NormalizedRootMeanSquaredError''R2Score''SpearmanCorrelation' |
| testData | Test data input. | MLTableJobInput |
| testDataSize | The fraction of test dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| trainingSettings | Inputs for training phase for an AutoML Job. | ForecastingTrainingSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| weightColumnName | The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down. | string |


### ForecastingSettings

| Name | Description | Value |
|-|-|-|
| countryOrRegionForHolidays | Country or region for holidays for forecasting tasks.These should be ISO 3166 two-letter country/region codes, for example 'US' or 'GB'. | string |
| cvStepSize | Number of periods between the origin time of one CV fold and the next fold. Forexample, ifCVStepSize= 3 for daily data, the origin time for each fold will bethree days apart. | int |
| featureLags | Flag for generating lags for the numeric features with 'auto' or null. | 'Auto''None' |
| forecastHorizon | The desired maximum forecast horizon in units of time-series frequency. | ForecastHorizon |
| frequency | When forecasting, this parameter represents the period with which the forecast is desired, for example daily, weekly, yearly, etc. The forecast frequency is dataset frequency by default. | string |
| seasonality | Set time series seasonality as an integer multiple of the series frequency.If seasonality is set to 'auto', it will be inferred. | Seasonality |
| shortSeriesHandlingConfig | The parameter defining how if AutoML should handle short time series. | 'Auto''Drop''None''Pad' |
| targetAggregateFunction | The function to be used to aggregate the time series target column to conform to a user specified frequency.If the TargetAggregateFunction is set i.e. not 'None', but the freq parameter is not set, the error is raised. The possible target aggregation functions are: "sum", "max", "min" and "mean". | 'Max''Mean''Min''None''Sum' |
| targetLags | The number of past periods to lag from the target column. | TargetLags |
| targetRollingWindowSize | The number of past periods used to create a rolling window average of the target column. | TargetRollingWindowSize |
| timeColumnName | The name of the time column. This parameter is required when forecasting to specify the datetime column in the input data used for building the time series and inferring its frequency. | string |
| timeSeriesIdColumnNames | The names of columns used to group a timeseries. It can be used to create multiple series.If grain is not defined, the data set is assumed to be one time-series. This parameter is used with task type forecasting. | string[] |
| useStl | Configure STL Decomposition of the time-series target column. | 'None''Season''SeasonTrend' |


### ForecastHorizon

| Name | Description | Value |
|-|-|-|
| mode | Set the object type | AutoCustom(required) |


### AutoForecastHorizon

| Name | Description | Value |
|-|-|-|
| mode | [Required] Set forecast horizon value selection mode. | 'Auto' (required) |


### CustomForecastHorizon

| Name | Description | Value |
|-|-|-|
| mode | [Required] Set forecast horizon value selection mode. | 'Custom' (required) |
| value | [Required] Forecast horizon value. | int (required) |


### Seasonality

| Name | Description | Value |
|-|-|-|
| mode | Set the object type | AutoCustom(required) |


### AutoSeasonality

| Name | Description | Value |
|-|-|-|
| mode | [Required] Seasonality mode. | 'Auto' (required) |


### CustomSeasonality

| Name | Description | Value |
|-|-|-|
| mode | [Required] Seasonality mode. | 'Custom' (required) |
| value | [Required] Seasonality value. | int (required) |


### TargetLags

| Name | Description | Value |
|-|-|-|
| mode | Set the object type | AutoCustom(required) |


### AutoTargetLags

| Name | Description | Value |
|-|-|-|
| mode | [Required] Set target lags mode - Auto/Custom | 'Auto' (required) |


### CustomTargetLags

| Name | Description | Value |
|-|-|-|
| mode | [Required] Set target lags mode - Auto/Custom | 'Custom' (required) |
| values | [Required] Set target lags values. | int[] (required) |


### TargetRollingWindowSize

| Name | Description | Value |
|-|-|-|
| mode | Set the object type | AutoCustom(required) |


### AutoTargetRollingWindowSize

| Name | Description | Value |
|-|-|-|
| mode | [Required] TargetRollingWindowSiz detection mode. | 'Auto' (required) |


### CustomTargetRollingWindowSize

| Name | Description | Value |
|-|-|-|
| mode | [Required] TargetRollingWindowSiz detection mode. | 'Custom' (required) |
| value | [Required] TargetRollingWindowSize value. | int (required) |


### ForecastingTrainingSettings

| Name | Description | Value |
|-|-|-|
| allowedTrainingAlgorithms | Allowed models for forecasting task. | String array containing any of:'Arimax''AutoArima''Average''DecisionTree''ElasticNet''ExponentialSmoothing''ExtremeRandomTrees''GradientBoosting''KNN''LassoLars''LightGBM''Naive''Prophet''RandomForest''SGD''SeasonalAverage''SeasonalNaive''TCNForecaster''XGBoostRegressor' |
| blockedTrainingAlgorithms | Blocked models for forecasting task. | String array containing any of:'Arimax''AutoArima''Average''DecisionTree''ElasticNet''ExponentialSmoothing''ExtremeRandomTrees''GradientBoosting''KNN''LassoLars''LightGBM''Naive''Prophet''RandomForest''SGD''SeasonalAverage''SeasonalNaive''TCNForecaster''XGBoostRegressor' |
| enableDnnTraining | Enable recommendation of DNN models. | bool |
| enableModelExplainability | Flag to turn on explainability on best model. | bool |
| enableOnnxCompatibleModels | Flag for enabling onnx compatible models. | bool |
| enableStackEnsemble | Enable stack ensemble run. | bool |
| enableVoteEnsemble | Enable voting ensemble run. | bool |
| ensembleModelDownloadTimeout | During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.Configure this parameter with a higher value than 300 secs, if more time is needed. | string |
| stackEnsembleSettings | Stack ensemble settings for stack ensemble run. | StackEnsembleSettings |


### ImageClassification

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'ImageClassification' (required) |
| limitSettings | [Required] Limit settings for the AutoML job. | ImageLimitSettings(required) |
| modelSettings | Settings used for training the model. | ImageModelSettingsClassification |
| primaryMetric | Primary metric to optimize for this task. | 'AUCWeighted''Accuracy''AveragePrecisionScoreWeighted''NormMacroRecall''PrecisionScoreWeighted' |
| searchSpace | Search space for sampling different combinations of models and their hyperparameters. | ImageModelDistributionSettingsClassification[] |
| sweepSettings | Model sweeping and hyperparameter sweeping related settings. | ImageSweepSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |


### ImageLimitSettings

| Name | Description | Value |
|-|-|-|
| maxConcurrentTrials | Maximum number of concurrent AutoML iterations. | int |
| maxTrials | Maximum number of AutoML iterations. | int |
| timeout | AutoML job timeout. | string |


### ImageModelSettingsClassification

| Name | Description | Value |
|-|-|-|
| advancedSettings | Settings for advanced scenarios. | string |
| amsGradient | Enable AMSGrad when optimizer is 'adam' or 'adamw'. | bool |
| augmentations | Settings for using Augmentations. | string |
| beta1 | Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | int |
| beta2 | Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | int |
| checkpointFrequency | Frequency to store model checkpoints. Must be a positive integer. | int |
| checkpointModel | The pretrained checkpoint model for incremental training. | MLFlowModelJobInput |
| checkpointRunId | The id of a previous run that has a pretrained checkpoint for incremental training. | string |
| distributed | Whether to use distributed training. | bool |
| earlyStopping | Enable early stopping logic during training. | bool |
| earlyStoppingDelay | Minimum number of epochs or validation evaluations to wait before primary metric improvementis tracked for early stopping. Must be a positive integer. | int |
| earlyStoppingPatience | Minimum number of epochs or validation evaluations with no primary metric improvement beforethe run is stopped. Must be a positive integer. | int |
| enableOnnxNormalization | Enable normalization when exporting ONNX model. | bool |
| evaluationFrequency | Frequency to evaluate validation dataset to get metric scores. Must be a positive integer. | int |
| gradientAccumulationStep | Gradient accumulation means running a configured number of "GradAccumulationStep" steps withoutupdating the model weights while accumulating the gradients of those steps, and then usingthe accumulated gradients to compute the weight updates. Must be a positive integer. | int |
| layersToFreeze | Number of layers to freeze for the model. Must be a positive integer.For instance, passing 2 as value for 'seresnext' meansfreezing layer0 and layer1. For a full list of models supported and details on layer freeze, pleasesee:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | int |
| learningRate | Initial learning rate. Must be a float in the range [0, 1]. | int |
| learningRateScheduler | Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'. | 'None''Step''WarmupCosine' |
| modelName | Name of the model to use for training.For more information on the available models please visit the official documentation:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| momentum | Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1]. | int |
| nesterov | Enable nesterov when optimizer is 'sgd'. | bool |
| numberOfEpochs | Number of training epochs. Must be a positive integer. | int |
| numberOfWorkers | Number of data loader workers. Must be a non-negative integer. | int |
| optimizer | Type of optimizer. | 'Adam''Adamw''None''Sgd' |
| randomSeed | Random seed to be used when using deterministic training. | int |
| stepLRGamma | Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1]. | int |
| stepLRStepSize | Value of step size when learning rate scheduler is 'step'. Must be a positive integer. | int |
| trainingBatchSize | Training batch size. Must be a positive integer. | int |
| trainingCropSize | Image crop size that is input to the neural network for the training dataset. Must be a positive integer. | int |
| validationBatchSize | Validation batch size. Must be a positive integer. | int |
| validationCropSize | Image crop size that is input to the neural network for the validation dataset. Must be a positive integer. | int |
| validationResizeSize | Image size to which to resize before cropping for validation dataset. Must be a positive integer. | int |
| warmupCosineLRCycles | Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1]. | int |
| warmupCosineLRWarmupEpochs | Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer. | int |
| weightDecay | Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1]. | int |
| weightedLoss | Weighted loss. The accepted values are 0 for no weighted loss.1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2. | int |


### MLFlowModelJobInput

| Name | Description | Value |
|-|-|-|
| description | Description for the input. | string |
| jobInputType | [Required] Specifies the type of job. | 'custom_model''literal''mlflow_model''mltable''triton_model''uri_file''uri_folder' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### ImageModelDistributionSettingsClassification

| Name | Description | Value |
|-|-|-|
| amsGradient | Enable AMSGrad when optimizer is 'adam' or 'adamw'. | string |
| augmentations | Settings for using Augmentations. | string |
| beta1 | Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | string |
| beta2 | Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | string |
| distributed | Whether to use distributer training. | string |
| earlyStopping | Enable early stopping logic during training. | string |
| earlyStoppingDelay | Minimum number of epochs or validation evaluations to wait before primary metric improvementis tracked for early stopping. Must be a positive integer. | string |
| earlyStoppingPatience | Minimum number of epochs or validation evaluations with no primary metric improvement beforethe run is stopped. Must be a positive integer. | string |
| enableOnnxNormalization | Enable normalization when exporting ONNX model. | string |
| evaluationFrequency | Frequency to evaluate validation dataset to get metric scores. Must be a positive integer. | string |
| gradientAccumulationStep | Gradient accumulation means running a configured number of "GradAccumulationStep" steps withoutupdating the model weights while accumulating the gradients of those steps, and then usingthe accumulated gradients to compute the weight updates. Must be a positive integer. | string |
| layersToFreeze | Number of layers to freeze for the model. Must be a positive integer.For instance, passing 2 as value for 'seresnext' meansfreezing layer0 and layer1. For a full list of models supported and details on layer freeze, pleasesee:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| learningRate | Initial learning rate. Must be a float in the range [0, 1]. | string |
| learningRateScheduler | Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'. | string |
| modelName | Name of the model to use for training.For more information on the available models please visit the official documentation:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| momentum | Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1]. | string |
| nesterov | Enable nesterov when optimizer is 'sgd'. | string |
| numberOfEpochs | Number of training epochs. Must be a positive integer. | string |
| numberOfWorkers | Number of data loader workers. Must be a non-negative integer. | string |
| optimizer | Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'. | string |
| randomSeed | Random seed to be used when using deterministic training. | string |
| stepLRGamma | Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1]. | string |
| stepLRStepSize | Value of step size when learning rate scheduler is 'step'. Must be a positive integer. | string |
| trainingBatchSize | Training batch size. Must be a positive integer. | string |
| trainingCropSize | Image crop size that is input to the neural network for the training dataset. Must be a positive integer. | string |
| validationBatchSize | Validation batch size. Must be a positive integer. | string |
| validationCropSize | Image crop size that is input to the neural network for the validation dataset. Must be a positive integer. | string |
| validationResizeSize | Image size to which to resize before cropping for validation dataset. Must be a positive integer. | string |
| warmupCosineLRCycles | Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1]. | string |
| warmupCosineLRWarmupEpochs | Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer. | string |
| weightDecay | Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1]. | string |
| weightedLoss | Weighted loss. The accepted values are 0 for no weighted loss.1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2. | string |


### ImageSweepSettings

| Name | Description | Value |
|-|-|-|
| earlyTermination | Type of early termination policy. | EarlyTerminationPolicy |
| samplingAlgorithm | [Required] Type of the hyperparameter sampling algorithms. | 'Bayesian''Grid''Random' (required) |


### EarlyTerminationPolicy

| Name | Description | Value |
|-|-|-|
| delayEvaluation | Number of intervals by which to delay the first evaluation. | int |
| evaluationInterval | Interval (number of runs) between policy evaluations. | int |
| policyType | Set the object type | BanditMedianStoppingTruncationSelection(required) |


### BanditPolicy

| Name | Description | Value |
|-|-|-|
| policyType | [Required] Name of policy configuration | 'Bandit' (required) |
| slackAmount | Absolute distance allowed from the best performing run. | int |
| slackFactor | Ratio of the allowed distance from the best performing run. | int |


### MedianStoppingPolicy

| Name | Description | Value |
|-|-|-|
| policyType | [Required] Name of policy configuration | 'MedianStopping' (required) |


### TruncationSelectionPolicy

| Name | Description | Value |
|-|-|-|
| policyType | [Required] Name of policy configuration | 'TruncationSelection' (required) |
| truncationPercentage | The percentage of runs to cancel at each evaluation interval. | int |


### ImageClassificationMultilabel

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'ImageClassificationMultilabel' (required) |
| limitSettings | [Required] Limit settings for the AutoML job. | ImageLimitSettings(required) |
| modelSettings | Settings used for training the model. | ImageModelSettingsClassification |
| primaryMetric | Primary metric to optimize for this task. | 'AUCWeighted''Accuracy''AveragePrecisionScoreWeighted''IOU''NormMacroRecall''PrecisionScoreWeighted' |
| searchSpace | Search space for sampling different combinations of models and their hyperparameters. | ImageModelDistributionSettingsClassification[] |
| sweepSettings | Model sweeping and hyperparameter sweeping related settings. | ImageSweepSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |


### ImageInstanceSegmentation

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'ImageInstanceSegmentation' (required) |
| limitSettings | [Required] Limit settings for the AutoML job. | ImageLimitSettings(required) |
| modelSettings | Settings used for training the model. | ImageModelSettingsObjectDetection |
| primaryMetric | Primary metric to optimize for this task. | 'MeanAveragePrecision' |
| searchSpace | Search space for sampling different combinations of models and their hyperparameters. | ImageModelDistributionSettingsObjectDetection[] |
| sweepSettings | Model sweeping and hyperparameter sweeping related settings. | ImageSweepSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |


### ImageModelSettingsObjectDetection

| Name | Description | Value |
|-|-|-|
| advancedSettings | Settings for advanced scenarios. | string |
| amsGradient | Enable AMSGrad when optimizer is 'adam' or 'adamw'. | bool |
| augmentations | Settings for using Augmentations. | string |
| beta1 | Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | int |
| beta2 | Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | int |
| boxDetectionsPerImage | Maximum number of detections per image, for all classes. Must be a positive integer.Note: This settings is not supported for the 'yolov5' algorithm. | int |
| boxScoreThreshold | During inference, only return proposals with a classification score greater thanBoxScoreThreshold. Must be a float in the range[0, 1]. | int |
| checkpointFrequency | Frequency to store model checkpoints. Must be a positive integer. | int |
| checkpointModel | The pretrained checkpoint model for incremental training. | MLFlowModelJobInput |
| checkpointRunId | The id of a previous run that has a pretrained checkpoint for incremental training. | string |
| distributed | Whether to use distributed training. | bool |
| earlyStopping | Enable early stopping logic during training. | bool |
| earlyStoppingDelay | Minimum number of epochs or validation evaluations to wait before primary metric improvementis tracked for early stopping. Must be a positive integer. | int |
| earlyStoppingPatience | Minimum number of epochs or validation evaluations with no primary metric improvement beforethe run is stopped. Must be a positive integer. | int |
| enableOnnxNormalization | Enable normalization when exporting ONNX model. | bool |
| evaluationFrequency | Frequency to evaluate validation dataset to get metric scores. Must be a positive integer. | int |
| gradientAccumulationStep | Gradient accumulation means running a configured number of "GradAccumulationStep" steps withoutupdating the model weights while accumulating the gradients of those steps, and then usingthe accumulated gradients to compute the weight updates. Must be a positive integer. | int |
| imageSize | Image size for train and validation. Must be a positive integer.Note: The training run may get into CUDA OOM if the size is too big.Note: This settings is only supported for the 'yolov5' algorithm. | int |
| layersToFreeze | Number of layers to freeze for the model. Must be a positive integer.For instance, passing 2 as value for 'seresnext' meansfreezing layer0 and layer1. For a full list of models supported and details on layer freeze, pleasesee:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | int |
| learningRate | Initial learning rate. Must be a float in the range [0, 1]. | int |
| learningRateScheduler | Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'. | 'None''Step''WarmupCosine' |
| maxSize | Maximum size of the image to be rescaled before feeding it to the backbone.Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.Note: This settings is not supported for the 'yolov5' algorithm. | int |
| minSize | Minimum size of the image to be rescaled before feeding it to the backbone.Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.Note: This settings is not supported for the 'yolov5' algorithm. | int |
| modelName | Name of the model to use for training.For more information on the available models please visit the official documentation:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| modelSize | Model size. Must be 'small', 'medium', 'large', or 'xlarge'.Note: training run may get into CUDA OOM if the model size is too big.Note: This settings is only supported for the 'yolov5' algorithm. | 'ExtraLarge''Large''Medium''None''Small' |
| momentum | Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1]. | int |
| multiScale | Enable multi-scale image by varying image size by +/- 50%.Note: training run may get into CUDA OOM if no sufficient GPU memory.Note: This settings is only supported for the 'yolov5' algorithm. | bool |
| nesterov | Enable nesterov when optimizer is 'sgd'. | bool |
| nmsIouThreshold | IOU threshold used during inference in NMS post processing. Must be a float in the range [0, 1]. | int |
| numberOfEpochs | Number of training epochs. Must be a positive integer. | int |
| numberOfWorkers | Number of data loader workers. Must be a non-negative integer. | int |
| optimizer | Type of optimizer. | 'Adam''Adamw''None''Sgd' |
| randomSeed | Random seed to be used when using deterministic training. | int |
| stepLRGamma | Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1]. | int |
| stepLRStepSize | Value of step size when learning rate scheduler is 'step'. Must be a positive integer. | int |
| tileGridSize | The grid size to use for tiling each image. Note: TileGridSize must not beNone to enable small object detection logic. A string containing two integers in mxn format.Note: This settings is not supported for the 'yolov5' algorithm. | string |
| tileOverlapRatio | Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).Note: This settings is not supported for the 'yolov5' algorithm. | int |
| tilePredictionsNmsThreshold | The IOU threshold to use to perform NMS while merging predictions from tiles and image.Used in validation/ inference. Must be float in the range [0, 1].Note: This settings is not supported for the 'yolov5' algorithm. | int |
| trainingBatchSize | Training batch size. Must be a positive integer. | int |
| validationBatchSize | Validation batch size. Must be a positive integer. | int |
| validationIouThreshold | IOU threshold to use when computing validation metric. Must be float in the range [0, 1]. | int |
| validationMetricType | Metric computation method to use for validation metrics. | 'Coco''CocoVoc''None''Voc' |
| warmupCosineLRCycles | Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1]. | int |
| warmupCosineLRWarmupEpochs | Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer. | int |
| weightDecay | Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1]. | int |


### ImageModelDistributionSettingsObjectDetection

| Name | Description | Value |
|-|-|-|
| amsGradient | Enable AMSGrad when optimizer is 'adam' or 'adamw'. | string |
| augmentations | Settings for using Augmentations. | string |
| beta1 | Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | string |
| beta2 | Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1]. | string |
| boxDetectionsPerImage | Maximum number of detections per image, for all classes. Must be a positive integer.Note: This settings is not supported for the 'yolov5' algorithm. | string |
| boxScoreThreshold | During inference, only return proposals with a classification score greater thanBoxScoreThreshold. Must be a float in the range[0, 1]. | string |
| distributed | Whether to use distributer training. | string |
| earlyStopping | Enable early stopping logic during training. | string |
| earlyStoppingDelay | Minimum number of epochs or validation evaluations to wait before primary metric improvementis tracked for early stopping. Must be a positive integer. | string |
| earlyStoppingPatience | Minimum number of epochs or validation evaluations with no primary metric improvement beforethe run is stopped. Must be a positive integer. | string |
| enableOnnxNormalization | Enable normalization when exporting ONNX model. | string |
| evaluationFrequency | Frequency to evaluate validation dataset to get metric scores. Must be a positive integer. | string |
| gradientAccumulationStep | Gradient accumulation means running a configured number of "GradAccumulationStep" steps withoutupdating the model weights while accumulating the gradients of those steps, and then usingthe accumulated gradients to compute the weight updates. Must be a positive integer. | string |
| imageSize | Image size for train and validation. Must be a positive integer.Note: The training run may get into CUDA OOM if the size is too big.Note: This settings is only supported for the 'yolov5' algorithm. | string |
| layersToFreeze | Number of layers to freeze for the model. Must be a positive integer.For instance, passing 2 as value for 'seresnext' meansfreezing layer0 and layer1. For a full list of models supported and details on layer freeze, pleasesee:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| learningRate | Initial learning rate. Must be a float in the range [0, 1]. | string |
| learningRateScheduler | Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'. | string |
| maxSize | Maximum size of the image to be rescaled before feeding it to the backbone.Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.Note: This settings is not supported for the 'yolov5' algorithm. | string |
| minSize | Minimum size of the image to be rescaled before feeding it to the backbone.Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.Note: This settings is not supported for the 'yolov5' algorithm. | string |
| modelName | Name of the model to use for training.For more information on the available models please visit the official documentation:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models. | string |
| modelSize | Model size. Must be 'small', 'medium', 'large', or 'xlarge'.Note: training run may get into CUDA OOM if the model size is too big.Note: This settings is only supported for the 'yolov5' algorithm. | string |
| momentum | Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1]. | string |
| multiScale | Enable multi-scale image by varying image size by +/- 50%.Note: training run may get into CUDA OOM if no sufficient GPU memory.Note: This settings is only supported for the 'yolov5' algorithm. | string |
| nesterov | Enable nesterov when optimizer is 'sgd'. | string |
| nmsIouThreshold | IOU threshold used during inference in NMS post processing. Must be float in the range [0, 1]. | string |
| numberOfEpochs | Number of training epochs. Must be a positive integer. | string |
| numberOfWorkers | Number of data loader workers. Must be a non-negative integer. | string |
| optimizer | Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'. | string |
| randomSeed | Random seed to be used when using deterministic training. | string |
| stepLRGamma | Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1]. | string |
| stepLRStepSize | Value of step size when learning rate scheduler is 'step'. Must be a positive integer. | string |
| tileGridSize | The grid size to use for tiling each image. Note: TileGridSize must not beNone to enable small object detection logic. A string containing two integers in mxn format.Note: This settings is not supported for the 'yolov5' algorithm. | string |
| tileOverlapRatio | Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).Note: This settings is not supported for the 'yolov5' algorithm. | string |
| tilePredictionsNmsThreshold | The IOU threshold to use to perform NMS while merging predictions from tiles and image.Used in validation/ inference. Must be float in the range [0, 1].Note: This settings is not supported for the 'yolov5' algorithm.NMS: Non-maximum suppression | string |
| trainingBatchSize | Training batch size. Must be a positive integer. | string |
| validationBatchSize | Validation batch size. Must be a positive integer. | string |
| validationIouThreshold | IOU threshold to use when computing validation metric. Must be float in the range [0, 1]. | string |
| validationMetricType | Metric computation method to use for validation metrics. Must be 'none', 'coco', 'voc', or 'coco_voc'. | string |
| warmupCosineLRCycles | Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1]. | string |
| warmupCosineLRWarmupEpochs | Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer. | string |
| weightDecay | Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1]. | string |


### ImageObjectDetection

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'ImageObjectDetection' (required) |
| limitSettings | [Required] Limit settings for the AutoML job. | ImageLimitSettings(required) |
| modelSettings | Settings used for training the model. | ImageModelSettingsObjectDetection |
| primaryMetric | Primary metric to optimize for this task. | 'MeanAveragePrecision' |
| searchSpace | Search space for sampling different combinations of models and their hyperparameters. | ImageModelDistributionSettingsObjectDetection[] |
| sweepSettings | Model sweeping and hyperparameter sweeping related settings. | ImageSweepSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |


### Regression

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'Regression' (required) |
| cvSplitColumnNames | Columns to use for CVSplit data. | string[] |
| featurizationSettings | Featurization inputs needed for AutoML job. | TableVerticalFeaturizationSettings |
| limitSettings | Execution constraints for AutoMLJob. | TableVerticalLimitSettings |
| nCrossValidations | Number of cross validation folds to be applied on training datasetwhen validation dataset is not provided. | NCrossValidations |
| primaryMetric | Primary metric for regression task. | 'NormalizedMeanAbsoluteError''NormalizedRootMeanSquaredError''R2Score''SpearmanCorrelation' |
| testData | Test data input. | MLTableJobInput |
| testDataSize | The fraction of test dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| trainingSettings | Inputs for training phase for an AutoML Job. | RegressionTrainingSettings |
| validationData | Validation data inputs. | MLTableJobInput |
| validationDataSize | The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided. | int |
| weightColumnName | The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down. | string |


### RegressionTrainingSettings

| Name | Description | Value |
|-|-|-|
| allowedTrainingAlgorithms | Allowed models for regression task. | String array containing any of:'DecisionTree''ElasticNet''ExtremeRandomTrees''GradientBoosting''KNN''LassoLars''LightGBM''RandomForest''SGD''XGBoostRegressor' |
| blockedTrainingAlgorithms | Blocked models for regression task. | String array containing any of:'DecisionTree''ElasticNet''ExtremeRandomTrees''GradientBoosting''KNN''LassoLars''LightGBM''RandomForest''SGD''XGBoostRegressor' |
| enableDnnTraining | Enable recommendation of DNN models. | bool |
| enableModelExplainability | Flag to turn on explainability on best model. | bool |
| enableOnnxCompatibleModels | Flag for enabling onnx compatible models. | bool |
| enableStackEnsemble | Enable stack ensemble run. | bool |
| enableVoteEnsemble | Enable voting ensemble run. | bool |
| ensembleModelDownloadTimeout | During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.Configure this parameter with a higher value than 300 secs, if more time is needed. | string |
| stackEnsembleSettings | Stack ensemble settings for stack ensemble run. | StackEnsembleSettings |


### TextClassification

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'TextClassification' (required) |
| featurizationSettings | Featurization inputs needed for AutoML job. | NlpVerticalFeaturizationSettings |
| limitSettings | Execution constraints for AutoMLJob. | NlpVerticalLimitSettings |
| primaryMetric | Primary metric for Text-Classification task. | 'AUCWeighted''Accuracy''AveragePrecisionScoreWeighted''NormMacroRecall''PrecisionScoreWeighted' |
| validationData | Validation data inputs. | MLTableJobInput |


### NlpVerticalFeaturizationSettings

| Name | Description | Value |
|-|-|-|
| datasetLanguage | Dataset language, useful for the text data. | string |


### NlpVerticalLimitSettings

| Name | Description | Value |
|-|-|-|
| maxConcurrentTrials | Maximum Concurrent AutoML iterations. | int |
| maxTrials | Number of AutoML iterations. | int |
| timeout | AutoML job timeout. | string |


### TextClassificationMultilabel

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'TextClassificationMultilabel' (required) |
| featurizationSettings | Featurization inputs needed for AutoML job. | NlpVerticalFeaturizationSettings |
| limitSettings | Execution constraints for AutoMLJob. | NlpVerticalLimitSettings |
| validationData | Validation data inputs. | MLTableJobInput |


### TextNer

| Name | Description | Value |
|-|-|-|
| taskType | [Required] Task type for AutoMLJob. | 'TextNER' (required) |
| featurizationSettings | Featurization inputs needed for AutoML job. | NlpVerticalFeaturizationSettings |
| limitSettings | Execution constraints for AutoMLJob. | NlpVerticalLimitSettings |
| validationData | Validation data inputs. | MLTableJobInput |


### CommandJob

| Name | Description | Value |
|-|-|-|
| jobType | [Required] Specifies the type of job. | 'Command' (required) |
| codeId | ARM resource ID of the code asset. | string |
| command | [Required] The command to execute on startup of the job. eg. "python train.py" | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| distribution | Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null. | DistributionConfiguration |
| environmentId | [Required] The ARM resource ID of the Environment specification for the job. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| environmentVariables | Environment variables included in the job. | CommandJobEnvironmentVariables |
| inputs | Mapping of input data bindings used in the job. | CommandJobInputs |
| limits | Command Job limit. | CommandJobLimits |
| outputs | Mapping of output data bindings used in the job. | CommandJobOutputs |
| queueSettings | Queue settings for the job | QueueSettings |
| resources | Compute Resource configuration for the job. | JobResourceConfiguration |


### DistributionConfiguration

| Name | Description | Value |
|-|-|-|
| distributionType | Set the object type | MpiPyTorchTensorFlow(required) |


### Mpi

| Name | Description | Value |
|-|-|-|
| distributionType | [Required] Specifies the type of distribution framework. | 'Mpi' (required) |
| processCountPerInstance | Number of processes per MPI node. | int |


### PyTorch

| Name | Description | Value |
|-|-|-|
| distributionType | [Required] Specifies the type of distribution framework. | 'PyTorch' (required) |
| processCountPerInstance | Number of processes per node. | int |


### TensorFlow

| Name | Description | Value |
|-|-|-|
| distributionType | [Required] Specifies the type of distribution framework. | 'TensorFlow' (required) |
| parameterServerCount | Number of parameter server tasks. | int |
| workerCount | Number of workers. If not specified, will default to the instance count. | int |


### CommandJobEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


### CommandJobInputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobInput |


### JobInput

| Name | Description | Value |
|-|-|-|
| description | Description for the input. | string |
| jobInputType | Set the object type | custom_modelliteralmlflow_modelmltabletriton_modeluri_fileuri_folder(required) |


### CustomModelJobInput

| Name | Description | Value |
|-|-|-|
| jobInputType | [Required] Specifies the type of job. | 'custom_model' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### LiteralJobInput

| Name | Description | Value |
|-|-|-|
| jobInputType | [Required] Specifies the type of job. | 'literal' (required) |
| value | [Required] Literal value for the input. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### TritonModelJobInput

| Name | Description | Value |
|-|-|-|
| jobInputType | [Required] Specifies the type of job. | 'triton_model' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### UriFileJobInput

| Name | Description | Value |
|-|-|-|
| jobInputType | [Required] Specifies the type of job. | 'uri_file' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### UriFolderJobInput

| Name | Description | Value |
|-|-|-|
| jobInputType | [Required] Specifies the type of job. | 'uri_folder' (required) |
| mode | Input Asset Delivery Mode. | 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount' |
| uri | [Required] Input Asset URI. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### CommandJobLimits

| Name | Description | Value |
|-|-|-|
| jobLimitsType | [Required] JobLimit type. | 'Command''Sweep' (required) |
| timeout | The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds. | string |


### CommandJobOutputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobOutput |


### PipelineJob

| Name | Description | Value |
|-|-|-|
| jobType | [Required] Specifies the type of job. | 'Pipeline' (required) |
| inputs | Inputs for the pipeline job. | PipelineJobInputs |
| jobs | Jobs construct the Pipeline Job. | PipelineJobJobs |
| outputs | Outputs for the pipeline job | PipelineJobOutputs |
| settings | Pipeline settings, for things like ContinueRunOnStepFailure etc. | For Bicep, you can use theany()function. |
| sourceJobId | ARM resource ID of source job. | string |


### PipelineJobInputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobInput |


### PipelineJobJobs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | For Bicep, you can use theany()function. |


### PipelineJobOutputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobOutput |


### SweepJob

| Name | Description | Value |
|-|-|-|
| jobType | [Required] Specifies the type of job. | 'Sweep' (required) |
| earlyTermination | Early termination policies enable canceling poor-performing runs before they complete | EarlyTerminationPolicy |
| inputs | Mapping of input data bindings used in the job. | SweepJobInputs |
| limits | Sweep Job limit. | SweepJobLimits |
| objective | [Required] Optimization objective. | Objective(required) |
| outputs | Mapping of output data bindings used in the job. | SweepJobOutputs |
| queueSettings | Queue settings for the job | QueueSettings |
| samplingAlgorithm | [Required] The hyperparameter sampling algorithm | SamplingAlgorithm(required) |
| searchSpace | [Required] A dictionary containing each parameter and its distribution. The dictionary key is the name of the parameter | For Bicep, you can use theany()function.(required) |
| trial | [Required] Trial component definition. | TrialComponent(required) |


### SweepJobInputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobInput |


### SweepJobLimits

| Name | Description | Value |
|-|-|-|
| jobLimitsType | [Required] JobLimit type. | 'Command''Sweep' (required) |
| maxConcurrentTrials | Sweep Job max concurrent trials. | int |
| maxTotalTrials | Sweep Job max total trials. | int |
| timeout | The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds. | string |
| trialTimeout | Sweep Job Trial timeout value. | string |


### Objective

| Name | Description | Value |
|-|-|-|
| goal | [Required] Defines supported metric goals for hyperparameter tuning | 'Maximize''Minimize' (required) |
| primaryMetric | [Required] Name of the metric to optimize. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |


### SweepJobOutputs

| Name | Description | Value |
|-|-|-|
| {customized property} |  | JobOutput |


### SamplingAlgorithm

| Name | Description | Value |
|-|-|-|
| samplingAlgorithmType | Set the object type | BayesianGridRandom(required) |


### BayesianSamplingAlgorithm

| Name | Description | Value |
|-|-|-|
| samplingAlgorithmType | [Required] The algorithm used for generating hyperparameter values, along with configuration properties | 'Bayesian' (required) |


### GridSamplingAlgorithm

| Name | Description | Value |
|-|-|-|
| samplingAlgorithmType | [Required] The algorithm used for generating hyperparameter values, along with configuration properties | 'Grid' (required) |


### RandomSamplingAlgorithm

| Name | Description | Value |
|-|-|-|
| samplingAlgorithmType | [Required] The algorithm used for generating hyperparameter values, along with configuration properties | 'Random' (required) |
| rule | The specific type of random algorithm | 'Random''Sobol' |
| seed | An optional integer to use as the seed for random number generation | int |


### TrialComponent

| Name | Description | Value |
|-|-|-|
| codeId | ARM resource ID of the code asset. | string |
| command | [Required] The command to execute on startup of the job. eg. "python train.py" | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| distribution | Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null. | DistributionConfiguration |
| environmentId | [Required] The ARM resource ID of the Environment specification for the job. | string (required)Constraints:Min length = 1Pattern =[a-zA-Z0-9_] |
| environmentVariables | Environment variables included in the job. | TrialComponentEnvironmentVariables |
| resources | Compute Resource configuration for the job. | JobResourceConfiguration |


### TrialComponentEnvironmentVariables

| Name | Description | Value |
|-|-|-|
| {customized property} |  | string |


