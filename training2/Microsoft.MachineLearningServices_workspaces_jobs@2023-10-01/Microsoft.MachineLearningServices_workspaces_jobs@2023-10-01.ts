import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface Props extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * ARM resource ID of the component resource.
   */
readonly componentId?: string;

/**
   * ARM resource ID of the compute resource.
   */
readonly computeId?: string;

/**
   * The asset description text.
   */
readonly description?: string;

/**
   * Display name of job.
   */
readonly displayName?: string;

/**
   * The name of the experiment the job belongs to. If not set, the job is placed in the "Default" experiment.
   */
readonly experimentName?: string;

/**
   * Identity configuration. If set, this should be one of AmlToken, ManagedIdentity, UserIdentity or null.Defaults to AmlToken if null.
   */
readonly identity?: IdentityConfiguration;

/**
   * Is the asset archived?
   */
readonly isArchived?: bool;

/**
   * List of JobEndpoints.For local jobs, a job endpoint will have an endpoint value of FileStreamObject.
   */
readonly services?: JobBaseServices;

/**
   * Set the object type
   */
readonly jobType: AutoMLCommandPipelineSweep;

/**
   * Set the object type
   */
readonly identityType: AMLTokenManagedUserIdentity;

/**
   * [Required] Specifies the type of identity framework.
   */
readonly identityType: 'AMLToken';

/**
   * [Required] Specifies the type of identity framework.
   */
readonly identityType: 'Managed';

/**
   * Specifies a user-assigned identity by client ID. For system-assigned, do not set this field.
   */
readonly clientId?: stringConstranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;

/**
   * Specifies a user-assigned identity by object ID. For system-assigned, do not set this field.
   */
readonly objectId?: stringConstranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;

/**
   * Specifies a user-assigned identity by ARM resource ID. For system-assigned, do not set this field.
   */
readonly resourceId?: string;

/**
   * [Required] Specifies the type of identity framework.
   */
readonly identityType: 'UserIdentity';

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: JobService;

/**
   * Url for endpoint.
   */
readonly endpoint?: string;

/**
   * Endpoint type.
   */
readonly jobServiceType?: string;

/**
   * Nodes that user would like to start the service on.If Nodes is not set or set to null, the service will only be started on leader node.
   */
readonly nodes?: Nodes;

/**
   * Port for endpoint.
   */
readonly port?: number;

/**
   * Set the object type
   */
readonly nodesValueType: All;

/**
   * [Required] Type of the Nodes value
   */
readonly nodesValueType: 'All';

/**
   * 
   */
readonly {customized property}?: string;

/**
   * [Required] Specifies the type of job.
   */
readonly jobType: 'AutoML';

/**
   * The ARM resource ID of the Environment specification for the job.This is optional value to provide, if not provided, AutoML will default this to Production AutoML curated environment version when running the job.
   */
readonly environmentId?: string;

/**
   * Environment variables included in the job.
   */
readonly environmentVariables?: AutoMLJobEnvironmentVariables;

/**
   * Mapping of output data bindings used in the job.
   */
readonly outputs?: AutoMLJobOutputs;

/**
   * Queue settings for the job
   */
readonly queueSettings?: QueueSettings;

/**
   * Compute Resource configuration for the job.
   */
readonly resources?: JobResourceConfiguration;

/**
   * [Required] This represents scenario which can be one of Tables/NLP/Image
   */
readonly taskDetails: AutoMLVertical;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: JobOutput;

/**
   * Description for the output.
   */
readonly description?: string;

/**
   * Set the object type
   */
readonly jobOutputType: custom_modelmlflow_modelmltabletriton_modeluri_fileuri_folder;

/**
   * [Required] Specifies the type of job.
   */
readonly jobOutputType: 'custom_model';

/**
   * Output Asset Delivery Mode.
   */
readonly mode?: 'ReadWriteMount''Upload';

/**
   * Output Asset URI.
   */
readonly uri?: string;

/**
   * [Required] Specifies the type of job.
   */
readonly jobOutputType: 'mlflow_model';

/**
   * Output Asset Delivery Mode.
   */
readonly mode?: 'ReadWriteMount''Upload';

/**
   * Output Asset URI.
   */
readonly uri?: string;

/**
   * [Required] Specifies the type of job.
   */
readonly jobOutputType: 'mltable';

/**
   * Output Asset Delivery Mode.
   */
readonly mode?: 'ReadWriteMount''Upload';

/**
   * Output Asset URI.
   */
readonly uri?: string;

/**
   * [Required] Specifies the type of job.
   */
readonly jobOutputType: 'triton_model';

/**
   * Output Asset Delivery Mode.
   */
readonly mode?: 'ReadWriteMount''Upload';

/**
   * Output Asset URI.
   */
readonly uri?: string;

/**
   * [Required] Specifies the type of job.
   */
readonly jobOutputType: 'uri_file';

/**
   * Output Asset Delivery Mode.
   */
readonly mode?: 'ReadWriteMount''Upload';

/**
   * Output Asset URI.
   */
readonly uri?: string;

/**
   * [Required] Specifies the type of job.
   */
readonly jobOutputType: 'uri_folder';

/**
   * Output Asset Delivery Mode.
   */
readonly mode?: 'ReadWriteMount''Upload';

/**
   * Output Asset URI.
   */
readonly uri?: string;

/**
   * Controls the compute job tier
   */
readonly jobTier?: 'Basic''Null''Premium''Spot''Standard';

/**
   * Extra arguments to pass to the Docker run command. This would override any parameters that have already been set by the system, or in this section. This parameter is only supported for Azure ML compute types.
   */
readonly dockerArgs?: string;

/**
   * Optional number of instances or nodes used by the compute target.
   */
readonly instanceCount?: number;

/**
   * Optional type of VM used as supported by the compute target.
   */
readonly instanceType?: string;

/**
   * Size of the docker container's shared memory block. This should be in the format of (number)(unit) where number as to be greater than 0 and the unit can be one of b(bytes), k(kilobytes), m(megabytes), or g(gigabytes).
   */
readonly shmSize?: stringConstranumbers:Pattern =\d+[bBkKmMgG];

/**
   * 
   */
readonly {customized property}?: For Bicep, you can use theany()function.;

/**
   * 
   */
readonly {customized property}?: For Bicep, you can use theany()function.;

/**
   * Log verbosity for the job.
   */
readonly logVerbosity?: 'Critical''Debug''Error''Info''NotSet''Warning';

/**
   * Target column name: This is prediction values column.Also known as label column name in context of classification tasks.
   */
readonly targetColumnName?: string;

/**
   * [Required] Training data input.
   */
readonly trainingData: MLTableJobInput;

/**
   * Set the object type
   */
readonly taskType: ClassificationForecastingImageClassificationImageClassificationMultilabelImageInstanceSegmentationImageObjectDetectionRegressionTextClassificationTextClassificationMultilabelTextNER;

/**
   * Description for the input.
   */
readonly description?: string;

/**
   * [Required] Specifies the type of job.
   */
readonly jobInputType: 'custom_model''literal''mlflow_model''mltable''triton_model''uri_file''uri_folder';

/**
   * Input Asset Delivery Mode.
   */
readonly mode?: 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount';

/**
   * [Required] Input Asset URI.
   */
readonly uri: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * [Required] Task type for AutoMLJob.
   */
readonly taskType: 'Classification';

/**
   * Columns to use for CVSplit data.
   */
readonly cvSplitColumnNames?: string[];

/**
   * Featurization inputs needed for AutoML job.
   */
readonly featurizationSettings?: TableVerticalFeaturizationSettings;

/**
   * Execution constraints for AutoMLJob.
   */
readonly limitSettings?: TableVerticalLimitSettings;

/**
   * Number of cross validation folds to be applied on training datasetwhen validation dataset is not provided.
   */
readonly nCrossValidations?: NCrossValidations;

/**
   * Positive label for binary metrics calculation.
   */
readonly positiveLabel?: string;

/**
   * Primary metric for the task.
   */
readonly primaryMetric?: 'AUCWeighted''Accuracy''AveragePrecisionScoreWeighted''NormMacroRecall''PrecisionScoreWeighted';

/**
   * Test data input.
   */
readonly testData?: MLTableJobInput;

/**
   * The fraction of test dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided.
   */
readonly testDataSize?: number;

/**
   * Inputs for training phase for an AutoML Job.
   */
readonly trainingSettings?: ClassificationTrainingSettings;

/**
   * Validation data inputs.
   */
readonly validationData?: MLTableJobInput;

/**
   * The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided.
   */
readonly validationDataSize?: number;

/**
   * The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.
   */
readonly weightColumnName?: string;

/**
   * These transformers shall not be used in featurization.
   */
readonly blockedTransformers?: String array containing any of:'CatTargetEncoder''CountVectorizer''HashOneHotEncoder''LabelEncoder''NaiveBayes''OneHotEncoder''TextTargetEncoder''TfIdf''WoETargetEncoder''WordEmbedding';

/**
   * Dictionary of column name and its type (int, float, string, datetime etc).
   */
readonly columnNameAndTypes?: TableVerticalFeaturizationSettingsColumnNameAndTypes;

/**
   * Dataset language, useful for the text data.
   */
readonly datasetLanguage?: string;

/**
   * Determines whether to use Dnn based featurizers for data featurization.
   */
readonly enableDnnFeaturization?: bool;

/**
   * Featurization mode - User can keep the default 'Auto' mode and AutoML will take care of necessary transformation of the data in featurization phase.If 'Off' is selected then no featurization is done.If 'Custom' is selected then user can specify additional inputs to customize how featurization is done.
   */
readonly mode?: 'Auto''Custom''Off';

/**
   * User can specify additional transformers to be used along with the columns to which it would be applied and parameters for the transformer constructor.
   */
readonly transformerParams?: TableVerticalFeaturizationSettingsTransformerParams;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: ColumnTransformer[];

/**
   * Fields to apply transformer logic on.
   */
readonly fields?: string[];

/**
   * Different properties to be passed to transformer.Input expected is dictionary of key,value pairs in JSON format.
   */
readonly parameters?: For Bicep, you can use theany()function.;

/**
   * Enable early termination, determines whether or not if AutoMLJob will terminate early if there is no score improvement in last 20 iterations.
   */
readonly enableEarlyTermination?: bool;

/**
   * Exit score for the AutoML job.
   */
readonly exitScore?: number;

/**
   * Maximum Concurrent iterations.
   */
readonly maxConcurrentTrials?: number;

/**
   * Max cores per iteration.
   */
readonly maxCoresPerTrial?: number;

/**
   * Number of iterations.
   */
readonly maxTrials?: number;

/**
   * AutoML job timeout.
   */
readonly timeout?: string;

/**
   * Iteration timeout.
   */
readonly trialTimeout?: string;

/**
   * Set the object type
   */
readonly mode: AutoCustom;

/**
   * [Required] Mode for determining N-Cross validations.
   */
readonly mode: 'Auto';

/**
   * [Required] Mode for determining N-Cross validations.
   */
readonly mode: 'Custom';

/**
   * [Required] N-Cross validations value.
   */
readonly value: number;

/**
   * Allowed models for classification task.
   */
readonly allowedTrainingAlgorithms?: String array containing any of:'BernoulliNaiveBayes''DecisionTree''ExtremeRandomTrees''GradientBoosting''KNN''LightGBM''LinearSVM''LogisticRegression''MultinomialNaiveBayes''RandomForest''SGD''SVM''XGBoostClassifier';

/**
   * Blocked models for classification task.
   */
readonly blockedTrainingAlgorithms?: String array containing any of:'BernoulliNaiveBayes''DecisionTree''ExtremeRandomTrees''GradientBoosting''KNN''LightGBM''LinearSVM''LogisticRegression''MultinomialNaiveBayes''RandomForest''SGD''SVM''XGBoostClassifier';

/**
   * Enable recommendation of DNN models.
   */
readonly enableDnnTraining?: bool;

/**
   * Flag to turn on explainability on best model.
   */
readonly enableModelExplainability?: bool;

/**
   * Flag for enabling onnx compatible models.
   */
readonly enableOnnxCompatibleModels?: bool;

/**
   * Enable stack ensemble run.
   */
readonly enableStackEnsemble?: bool;

/**
   * Enable voting ensemble run.
   */
readonly enableVoteEnsemble?: bool;

/**
   * During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.Configure this parameter with a higher value than 300 secs, if more time is needed.
   */
readonly ensembleModelDownloadTimeout?: string;

/**
   * Stack ensemble settings for stack ensemble run.
   */
readonly stackEnsembleSettings?: StackEnsembleSettings;

/**
   * Optional parameters to pass to the initializer of the meta-learner.
   */
readonly stackMetaLearnerKWargs?: For Bicep, you can use theany()function.;

/**
   * Specifies the proportion of the training set (when choosing train and validation type of training) to be reserved for training the meta-learner. Default value is 0.2.
   */
readonly stackMetaLearnerTrainPercentage?: number;

/**
   * The meta-learner is a model trained on the output of the individual heterogeneous models.
   */
readonly stackMetaLearnerType?: 'ElasticNet''ElasticNetCV''LightGBMClassifier''LightGBMRegressor''LinearRegression''LogisticRegression''LogisticRegressionCV''None';

/**
   * [Required] Task type for AutoMLJob.
   */
readonly taskType: 'Forecasting';

/**
   * Columns to use for CVSplit data.
   */
readonly cvSplitColumnNames?: string[];

/**
   * Featurization inputs needed for AutoML job.
   */
readonly featurizationSettings?: TableVerticalFeaturizationSettings;

/**
   * Forecasting task specific inputs.
   */
readonly forecastingSettings?: ForecastingSettings;

/**
   * Execution constraints for AutoMLJob.
   */
readonly limitSettings?: TableVerticalLimitSettings;

/**
   * Number of cross validation folds to be applied on training datasetwhen validation dataset is not provided.
   */
readonly nCrossValidations?: NCrossValidations;

/**
   * Primary metric for forecasting task.
   */
readonly primaryMetric?: 'NormalizedMeanAbsoluteError''NormalizedRootMeanSquaredError''R2Score''SpearmanCorrelation';

/**
   * Test data input.
   */
readonly testData?: MLTableJobInput;

/**
   * The fraction of test dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided.
   */
readonly testDataSize?: number;

/**
   * Inputs for training phase for an AutoML Job.
   */
readonly trainingSettings?: ForecastingTrainingSettings;

/**
   * Validation data inputs.
   */
readonly validationData?: MLTableJobInput;

/**
   * The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided.
   */
readonly validationDataSize?: number;

/**
   * The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.
   */
readonly weightColumnName?: string;

/**
   * Country or region for holidays for forecasting tasks.These should be ISO 3166 two-letter country/region codes, for example 'US' or 'GB'.
   */
readonly countryOrRegionForHolidays?: string;

/**
   * Number of periods between the origin time of one CV fold and the next fold. Forexample, ifCVStepSize= 3 for daily data, the origin time for each fold will bethree days apart.
   */
readonly cvStepSize?: number;

/**
   * Flag for generating lags for the numeric features with 'auto' or null.
   */
readonly featureLags?: 'Auto''None';

/**
   * The desired maximum forecast horizon in units of time-series frequency.
   */
readonly forecastHorizon?: ForecastHorizon;

/**
   * When forecasting, this parameter represents the period with which the forecast is desired, for example daily, weekly, yearly, etc. The forecast frequency is dataset frequency by default.
   */
readonly frequency?: string;

/**
   * Set time series seasonality as an integer multiple of the series frequency.If seasonality is set to 'auto', it will be inferred.
   */
readonly seasonality?: Seasonality;

/**
   * The parameter defining how if AutoML should handle short time series.
   */
readonly shortSeriesHandlingConfig?: 'Auto''Drop''None''Pad';

/**
   * The function to be used to aggregate the time series target column to conform to a user specified frequency.If the TargetAggregateFunction is set i.e. not 'None', but the freq parameter is not set, the error is raised. The possible target aggregation functions are: "sum", "max", "min" and "mean".
   */
readonly targetAggregateFunction?: 'Max''Mean''Min''None''Sum';

/**
   * The number of past periods to lag from the target column.
   */
readonly targetLags?: TargetLags;

/**
   * The number of past periods used to create a rolling window average of the target column.
   */
readonly targetRollingWindowSize?: TargetRollingWindowSize;

/**
   * The name of the time column. This parameter is required when forecasting to specify the datetime column in the input data used for building the time series and inferring its frequency.
   */
readonly timeColumnName?: string;

/**
   * The names of columns used to group a timeseries. It can be used to create multiple series.If grain is not defined, the data set is assumed to be one time-series. This parameter is used with task type forecasting.
   */
readonly timeSeriesIdColumnNames?: string[];

/**
   * Configure STL Decomposition of the time-series target column.
   */
readonly useStl?: 'None''Season''SeasonTrend';

/**
   * Set the object type
   */
readonly mode: AutoCustom;

/**
   * [Required] Set forecast horizon value selection mode.
   */
readonly mode: 'Auto';

/**
   * [Required] Set forecast horizon value selection mode.
   */
readonly mode: 'Custom';

/**
   * [Required] Forecast horizon value.
   */
readonly value: number;

/**
   * Set the object type
   */
readonly mode: AutoCustom;

/**
   * [Required] Seasonality mode.
   */
readonly mode: 'Auto';

/**
   * [Required] Seasonality mode.
   */
readonly mode: 'Custom';

/**
   * [Required] Seasonality value.
   */
readonly value: number;

/**
   * Set the object type
   */
readonly mode: AutoCustom;

/**
   * [Required] Set target lags mode - Auto/Custom
   */
readonly mode: 'Auto';

/**
   * [Required] Set target lags mode - Auto/Custom
   */
readonly mode: 'Custom';

/**
   * [Required] Set target lags values.
   */
readonly values: number[];

/**
   * Set the object type
   */
readonly mode: AutoCustom;

/**
   * [Required] TargetRollingWindowSiz detection mode.
   */
readonly mode: 'Auto';

/**
   * [Required] TargetRollingWindowSiz detection mode.
   */
readonly mode: 'Custom';

/**
   * [Required] TargetRollingWindowSize value.
   */
readonly value: number;

/**
   * Allowed models for forecasting task.
   */
readonly allowedTrainingAlgorithms?: String array containing any of:'Arimax''AutoArima''Average''DecisionTree''ElasticNet''ExponentialSmoothing''ExtremeRandomTrees''GradientBoosting''KNN''LassoLars''LightGBM''Naive''Prophet''RandomForest''SGD''SeasonalAverage''SeasonalNaive''TCNForecaster''XGBoostRegressor';

/**
   * Blocked models for forecasting task.
   */
readonly blockedTrainingAlgorithms?: String array containing any of:'Arimax''AutoArima''Average''DecisionTree''ElasticNet''ExponentialSmoothing''ExtremeRandomTrees''GradientBoosting''KNN''LassoLars''LightGBM''Naive''Prophet''RandomForest''SGD''SeasonalAverage''SeasonalNaive''TCNForecaster''XGBoostRegressor';

/**
   * Enable recommendation of DNN models.
   */
readonly enableDnnTraining?: bool;

/**
   * Flag to turn on explainability on best model.
   */
readonly enableModelExplainability?: bool;

/**
   * Flag for enabling onnx compatible models.
   */
readonly enableOnnxCompatibleModels?: bool;

/**
   * Enable stack ensemble run.
   */
readonly enableStackEnsemble?: bool;

/**
   * Enable voting ensemble run.
   */
readonly enableVoteEnsemble?: bool;

/**
   * During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.Configure this parameter with a higher value than 300 secs, if more time is needed.
   */
readonly ensembleModelDownloadTimeout?: string;

/**
   * Stack ensemble settings for stack ensemble run.
   */
readonly stackEnsembleSettings?: StackEnsembleSettings;

/**
   * [Required] Task type for AutoMLJob.
   */
readonly taskType: 'ImageClassification';

/**
   * [Required] Limit settings for the AutoML job.
   */
readonly limitSettings: ImageLimitSettings;

/**
   * Settings used for training the model.
   */
readonly modelSettings?: ImageModelSettingsClassification;

/**
   * Primary metric to optimize for this task.
   */
readonly primaryMetric?: 'AUCWeighted''Accuracy''AveragePrecisionScoreWeighted''NormMacroRecall''PrecisionScoreWeighted';

/**
   * Search space for sampling different combinations of models and their hyperparameters.
   */
readonly searchSpace?: ImageModelDistributionSettingsClassification[];

/**
   * Model sweeping and hyperparameter sweeping related settings.
   */
readonly sweepSettings?: ImageSweepSettings;

/**
   * Validation data inputs.
   */
readonly validationData?: MLTableJobInput;

/**
   * The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided.
   */
readonly validationDataSize?: number;

/**
   * Maximum number of concurrent AutoML iterations.
   */
readonly maxConcurrentTrials?: number;

/**
   * Maximum number of AutoML iterations.
   */
readonly maxTrials?: number;

/**
   * AutoML job timeout.
   */
readonly timeout?: string;

/**
   * Settings for advanced scenarios.
   */
readonly advancedSettings?: string;

/**
   * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
   */
readonly amsGradient?: bool;

/**
   * Settings for using Augmentations.
   */
readonly augmentations?: string;

/**
   * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
   */
readonly beta1?: number;

/**
   * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
   */
readonly beta2?: number;

/**
   * Frequency to store model checkpoints. Must be a positive integer.
   */
readonly checkpointFrequency?: number;

/**
   * The pretrained checkpoint model for incremental training.
   */
readonly checkpointModel?: MLFlowModelJobInput;

/**
   * The id of a previous run that has a pretrained checkpoint for incremental training.
   */
readonly checkpointRunId?: string;

/**
   * Whether to use distributed training.
   */
readonly distributed?: bool;

/**
   * Enable early stopping logic during training.
   */
readonly earlyStopping?: bool;

/**
   * Minimum number of epochs or validation evaluations to wait before primary metric improvementis tracked for early stopping. Must be a positive integer.
   */
readonly earlyStoppingDelay?: number;

/**
   * Minimum number of epochs or validation evaluations with no primary metric improvement beforethe run is stopped. Must be a positive integer.
   */
readonly earlyStoppingPatience?: number;

/**
   * Enable normalization when exporting ONNX model.
   */
readonly enableOnnxNormalization?: bool;

/**
   * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
   */
readonly evaluationFrequency?: number;

/**
   * Gradient accumulation means running a configured number of "GradAccumulationStep" steps withoutupdating the model weights while accumulating the gradients of those steps, and then usingthe accumulated gradients to compute the weight updates. Must be a positive integer.
   */
readonly gradientAccumulationStep?: number;

/**
   * Number of layers to freeze for the model. Must be a positive integer.For instance, passing 2 as value for 'seresnext' meansfreezing layer0 and layer1. For a full list of models supported and details on layer freeze, pleasesee:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models.
   */
readonly layersToFreeze?: number;

/**
   * Initial learning rate. Must be a float in the range [0, 1].
   */
readonly learningRate?: number;

/**
   * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
   */
readonly learningRateScheduler?: 'None''Step''WarmupCosine';

/**
   * Name of the model to use for training.For more information on the available models please visit the official documentation:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models.
   */
readonly modelName?: string;

/**
   * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
   */
readonly momentum?: number;

/**
   * Enable nesterov when optimizer is 'sgd'.
   */
readonly nesterov?: bool;

/**
   * Number of training epochs. Must be a positive integer.
   */
readonly numberOfEpochs?: number;

/**
   * Number of data loader workers. Must be a non-negative integer.
   */
readonly numberOfWorkers?: number;

/**
   * Type of optimizer.
   */
readonly optimizer?: 'Adam''Adamw''None''Sgd';

/**
   * Random seed to be used when using deterministic training.
   */
readonly randomSeed?: number;

/**
   * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
   */
readonly stepLRGamma?: number;

/**
   * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
   */
readonly stepLRStepSize?: number;

/**
   * Training batch size. Must be a positive integer.
   */
readonly trainingBatchSize?: number;

/**
   * Image crop size that is input to the neural network for the training dataset. Must be a positive integer.
   */
readonly trainingCropSize?: number;

/**
   * Validation batch size. Must be a positive integer.
   */
readonly validationBatchSize?: number;

/**
   * Image crop size that is input to the neural network for the validation dataset. Must be a positive integer.
   */
readonly validationCropSize?: number;

/**
   * Image size to which to resize before cropping for validation dataset. Must be a positive integer.
   */
readonly validationResizeSize?: number;

/**
   * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
   */
readonly warmupCosineLRCycles?: number;

/**
   * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
   */
readonly warmupCosineLRWarmupEpochs?: number;

/**
   * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
   */
readonly weightDecay?: number;

/**
   * Weighted loss. The accepted values are 0 for no weighted loss.1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2.
   */
readonly weightedLoss?: number;

/**
   * Description for the input.
   */
readonly description?: string;

/**
   * [Required] Specifies the type of job.
   */
readonly jobInputType: 'custom_model''literal''mlflow_model''mltable''triton_model''uri_file''uri_folder';

/**
   * Input Asset Delivery Mode.
   */
readonly mode?: 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount';

/**
   * [Required] Input Asset URI.
   */
readonly uri: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
   */
readonly amsGradient?: string;

/**
   * Settings for using Augmentations.
   */
readonly augmentations?: string;

/**
   * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
   */
readonly beta1?: string;

/**
   * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
   */
readonly beta2?: string;

/**
   * Whether to use distributer training.
   */
readonly distributed?: string;

/**
   * Enable early stopping logic during training.
   */
readonly earlyStopping?: string;

/**
   * Minimum number of epochs or validation evaluations to wait before primary metric improvementis tracked for early stopping. Must be a positive integer.
   */
readonly earlyStoppingDelay?: string;

/**
   * Minimum number of epochs or validation evaluations with no primary metric improvement beforethe run is stopped. Must be a positive integer.
   */
readonly earlyStoppingPatience?: string;

/**
   * Enable normalization when exporting ONNX model.
   */
readonly enableOnnxNormalization?: string;

/**
   * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
   */
readonly evaluationFrequency?: string;

/**
   * Gradient accumulation means running a configured number of "GradAccumulationStep" steps withoutupdating the model weights while accumulating the gradients of those steps, and then usingthe accumulated gradients to compute the weight updates. Must be a positive integer.
   */
readonly gradientAccumulationStep?: string;

/**
   * Number of layers to freeze for the model. Must be a positive integer.For instance, passing 2 as value for 'seresnext' meansfreezing layer0 and layer1. For a full list of models supported and details on layer freeze, pleasesee:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models.
   */
readonly layersToFreeze?: string;

/**
   * Initial learning rate. Must be a float in the range [0, 1].
   */
readonly learningRate?: string;

/**
   * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
   */
readonly learningRateScheduler?: string;

/**
   * Name of the model to use for training.For more information on the available models please visit the official documentation:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models.
   */
readonly modelName?: string;

/**
   * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
   */
readonly momentum?: string;

/**
   * Enable nesterov when optimizer is 'sgd'.
   */
readonly nesterov?: string;

/**
   * Number of training epochs. Must be a positive integer.
   */
readonly numberOfEpochs?: string;

/**
   * Number of data loader workers. Must be a non-negative integer.
   */
readonly numberOfWorkers?: string;

/**
   * Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'.
   */
readonly optimizer?: string;

/**
   * Random seed to be used when using deterministic training.
   */
readonly randomSeed?: string;

/**
   * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
   */
readonly stepLRGamma?: string;

/**
   * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
   */
readonly stepLRStepSize?: string;

/**
   * Training batch size. Must be a positive integer.
   */
readonly trainingBatchSize?: string;

/**
   * Image crop size that is input to the neural network for the training dataset. Must be a positive integer.
   */
readonly trainingCropSize?: string;

/**
   * Validation batch size. Must be a positive integer.
   */
readonly validationBatchSize?: string;

/**
   * Image crop size that is input to the neural network for the validation dataset. Must be a positive integer.
   */
readonly validationCropSize?: string;

/**
   * Image size to which to resize before cropping for validation dataset. Must be a positive integer.
   */
readonly validationResizeSize?: string;

/**
   * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
   */
readonly warmupCosineLRCycles?: string;

/**
   * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
   */
readonly warmupCosineLRWarmupEpochs?: string;

/**
   * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
   */
readonly weightDecay?: string;

/**
   * Weighted loss. The accepted values are 0 for no weighted loss.1 for weighted loss with sqrt.(class_weights). 2 for weighted loss with class_weights. Must be 0 or 1 or 2.
   */
readonly weightedLoss?: string;

/**
   * Type of early termination policy.
   */
readonly earlyTermination?: EarlyTerminationPolicy;

/**
   * [Required] Type of the hyperparameter sampling algorithms.
   */
readonly samplingAlgorithm: 'Bayesian''Grid''Random';

/**
   * Number of intervals by which to delay the first evaluation.
   */
readonly delayEvaluation?: number;

/**
   * Interval (number of runs) between policy evaluations.
   */
readonly evaluationInterval?: number;

/**
   * Set the object type
   */
readonly policyType: BanditMedianStoppingTruncationSelection;

/**
   * [Required] Name of policy configuration
   */
readonly policyType: 'Bandit';

/**
   * Absolute distance allowed from the best performing run.
   */
readonly slackAmount?: number;

/**
   * Ratio of the allowed distance from the best performing run.
   */
readonly slackFactor?: number;

/**
   * [Required] Name of policy configuration
   */
readonly policyType: 'MedianStopping';

/**
   * [Required] Name of policy configuration
   */
readonly policyType: 'TruncationSelection';

/**
   * The percentage of runs to cancel at each evaluation interval.
   */
readonly truncationPercentage?: number;

/**
   * [Required] Task type for AutoMLJob.
   */
readonly taskType: 'ImageClassificationMultilabel';

/**
   * [Required] Limit settings for the AutoML job.
   */
readonly limitSettings: ImageLimitSettings;

/**
   * Settings used for training the model.
   */
readonly modelSettings?: ImageModelSettingsClassification;

/**
   * Primary metric to optimize for this task.
   */
readonly primaryMetric?: 'AUCWeighted''Accuracy''AveragePrecisionScoreWeighted''IOU''NormMacroRecall''PrecisionScoreWeighted';

/**
   * Search space for sampling different combinations of models and their hyperparameters.
   */
readonly searchSpace?: ImageModelDistributionSettingsClassification[];

/**
   * Model sweeping and hyperparameter sweeping related settings.
   */
readonly sweepSettings?: ImageSweepSettings;

/**
   * Validation data inputs.
   */
readonly validationData?: MLTableJobInput;

/**
   * The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided.
   */
readonly validationDataSize?: number;

/**
   * [Required] Task type for AutoMLJob.
   */
readonly taskType: 'ImageInstanceSegmentation';

/**
   * [Required] Limit settings for the AutoML job.
   */
readonly limitSettings: ImageLimitSettings;

/**
   * Settings used for training the model.
   */
readonly modelSettings?: ImageModelSettingsObjectDetection;

/**
   * Primary metric to optimize for this task.
   */
readonly primaryMetric?: 'MeanAveragePrecision';

/**
   * Search space for sampling different combinations of models and their hyperparameters.
   */
readonly searchSpace?: ImageModelDistributionSettingsObjectDetection[];

/**
   * Model sweeping and hyperparameter sweeping related settings.
   */
readonly sweepSettings?: ImageSweepSettings;

/**
   * Validation data inputs.
   */
readonly validationData?: MLTableJobInput;

/**
   * The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided.
   */
readonly validationDataSize?: number;

/**
   * Settings for advanced scenarios.
   */
readonly advancedSettings?: string;

/**
   * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
   */
readonly amsGradient?: bool;

/**
   * Settings for using Augmentations.
   */
readonly augmentations?: string;

/**
   * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
   */
readonly beta1?: number;

/**
   * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
   */
readonly beta2?: number;

/**
   * Maximum number of detections per image, for all classes. Must be a positive integer.Note: This settings is not supported for the 'yolov5' algorithm.
   */
readonly boxDetectionsPerImage?: number;

/**
   * During inference, only return proposals with a classification score greater thanBoxScoreThreshold. Must be a float in the range[0, 1].
   */
readonly boxScoreThreshold?: number;

/**
   * Frequency to store model checkpoints. Must be a positive integer.
   */
readonly checkpointFrequency?: number;

/**
   * The pretrained checkpoint model for incremental training.
   */
readonly checkpointModel?: MLFlowModelJobInput;

/**
   * The id of a previous run that has a pretrained checkpoint for incremental training.
   */
readonly checkpointRunId?: string;

/**
   * Whether to use distributed training.
   */
readonly distributed?: bool;

/**
   * Enable early stopping logic during training.
   */
readonly earlyStopping?: bool;

/**
   * Minimum number of epochs or validation evaluations to wait before primary metric improvementis tracked for early stopping. Must be a positive integer.
   */
readonly earlyStoppingDelay?: number;

/**
   * Minimum number of epochs or validation evaluations with no primary metric improvement beforethe run is stopped. Must be a positive integer.
   */
readonly earlyStoppingPatience?: number;

/**
   * Enable normalization when exporting ONNX model.
   */
readonly enableOnnxNormalization?: bool;

/**
   * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
   */
readonly evaluationFrequency?: number;

/**
   * Gradient accumulation means running a configured number of "GradAccumulationStep" steps withoutupdating the model weights while accumulating the gradients of those steps, and then usingthe accumulated gradients to compute the weight updates. Must be a positive integer.
   */
readonly gradientAccumulationStep?: number;

/**
   * Image size for train and validation. Must be a positive integer.Note: The training run may get into CUDA OOM if the size is too big.Note: This settings is only supported for the 'yolov5' algorithm.
   */
readonly imageSize?: number;

/**
   * Number of layers to freeze for the model. Must be a positive integer.For instance, passing 2 as value for 'seresnext' meansfreezing layer0 and layer1. For a full list of models supported and details on layer freeze, pleasesee:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models.
   */
readonly layersToFreeze?: number;

/**
   * Initial learning rate. Must be a float in the range [0, 1].
   */
readonly learningRate?: number;

/**
   * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
   */
readonly learningRateScheduler?: 'None''Step''WarmupCosine';

/**
   * Maximum size of the image to be rescaled before feeding it to the backbone.Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.Note: This settings is not supported for the 'yolov5' algorithm.
   */
readonly maxSize?: number;

/**
   * Minimum size of the image to be rescaled before feeding it to the backbone.Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.Note: This settings is not supported for the 'yolov5' algorithm.
   */
readonly minSize?: number;

/**
   * Name of the model to use for training.For more information on the available models please visit the official documentation:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models.
   */
readonly modelName?: string;

/**
   * Model size. Must be 'small', 'medium', 'large', or 'xlarge'.Note: training run may get into CUDA OOM if the model size is too big.Note: This settings is only supported for the 'yolov5' algorithm.
   */
readonly modelSize?: 'ExtraLarge''Large''Medium''None''Small';

/**
   * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
   */
readonly momentum?: number;

/**
   * Enable multi-scale image by varying image size by +/- 50%.Note: training run may get into CUDA OOM if no sufficient GPU memory.Note: This settings is only supported for the 'yolov5' algorithm.
   */
readonly multiScale?: bool;

/**
   * Enable nesterov when optimizer is 'sgd'.
   */
readonly nesterov?: bool;

/**
   * IOU threshold used during inference in NMS post processing. Must be a float in the range [0, 1].
   */
readonly nmsIouThreshold?: number;

/**
   * Number of training epochs. Must be a positive integer.
   */
readonly numberOfEpochs?: number;

/**
   * Number of data loader workers. Must be a non-negative integer.
   */
readonly numberOfWorkers?: number;

/**
   * Type of optimizer.
   */
readonly optimizer?: 'Adam''Adamw''None''Sgd';

/**
   * Random seed to be used when using deterministic training.
   */
readonly randomSeed?: number;

/**
   * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
   */
readonly stepLRGamma?: number;

/**
   * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
   */
readonly stepLRStepSize?: number;

/**
   * The grid size to use for tiling each image. Note: TileGridSize must not beNone to enable small object detection logic. A string containing two integers in mxn format.Note: This settings is not supported for the 'yolov5' algorithm.
   */
readonly tileGridSize?: string;

/**
   * Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).Note: This settings is not supported for the 'yolov5' algorithm.
   */
readonly tileOverlapRatio?: number;

/**
   * The IOU threshold to use to perform NMS while merging predictions from tiles and image.Used in validation/ inference. Must be float in the range [0, 1].Note: This settings is not supported for the 'yolov5' algorithm.
   */
readonly tilePredictionsNmsThreshold?: number;

/**
   * Training batch size. Must be a positive integer.
   */
readonly trainingBatchSize?: number;

/**
   * Validation batch size. Must be a positive integer.
   */
readonly validationBatchSize?: number;

/**
   * IOU threshold to use when computing validation metric. Must be float in the range [0, 1].
   */
readonly validationIouThreshold?: number;

/**
   * Metric computation method to use for validation metrics.
   */
readonly validationMetricType?: 'Coco''CocoVoc''None''Voc';

/**
   * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
   */
readonly warmupCosineLRCycles?: number;

/**
   * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
   */
readonly warmupCosineLRWarmupEpochs?: number;

/**
   * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
   */
readonly weightDecay?: number;

/**
   * Enable AMSGrad when optimizer is 'adam' or 'adamw'.
   */
readonly amsGradient?: string;

/**
   * Settings for using Augmentations.
   */
readonly augmentations?: string;

/**
   * Value of 'beta1' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
   */
readonly beta1?: string;

/**
   * Value of 'beta2' when optimizer is 'adam' or 'adamw'. Must be a float in the range [0, 1].
   */
readonly beta2?: string;

/**
   * Maximum number of detections per image, for all classes. Must be a positive integer.Note: This settings is not supported for the 'yolov5' algorithm.
   */
readonly boxDetectionsPerImage?: string;

/**
   * During inference, only return proposals with a classification score greater thanBoxScoreThreshold. Must be a float in the range[0, 1].
   */
readonly boxScoreThreshold?: string;

/**
   * Whether to use distributer training.
   */
readonly distributed?: string;

/**
   * Enable early stopping logic during training.
   */
readonly earlyStopping?: string;

/**
   * Minimum number of epochs or validation evaluations to wait before primary metric improvementis tracked for early stopping. Must be a positive integer.
   */
readonly earlyStoppingDelay?: string;

/**
   * Minimum number of epochs or validation evaluations with no primary metric improvement beforethe run is stopped. Must be a positive integer.
   */
readonly earlyStoppingPatience?: string;

/**
   * Enable normalization when exporting ONNX model.
   */
readonly enableOnnxNormalization?: string;

/**
   * Frequency to evaluate validation dataset to get metric scores. Must be a positive integer.
   */
readonly evaluationFrequency?: string;

/**
   * Gradient accumulation means running a configured number of "GradAccumulationStep" steps withoutupdating the model weights while accumulating the gradients of those steps, and then usingthe accumulated gradients to compute the weight updates. Must be a positive integer.
   */
readonly gradientAccumulationStep?: string;

/**
   * Image size for train and validation. Must be a positive integer.Note: The training run may get into CUDA OOM if the size is too big.Note: This settings is only supported for the 'yolov5' algorithm.
   */
readonly imageSize?: string;

/**
   * Number of layers to freeze for the model. Must be a positive integer.For instance, passing 2 as value for 'seresnext' meansfreezing layer0 and layer1. For a full list of models supported and details on layer freeze, pleasesee:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models.
   */
readonly layersToFreeze?: string;

/**
   * Initial learning rate. Must be a float in the range [0, 1].
   */
readonly learningRate?: string;

/**
   * Type of learning rate scheduler. Must be 'warmup_cosine' or 'step'.
   */
readonly learningRateScheduler?: string;

/**
   * Maximum size of the image to be rescaled before feeding it to the backbone.Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.Note: This settings is not supported for the 'yolov5' algorithm.
   */
readonly maxSize?: string;

/**
   * Minimum size of the image to be rescaled before feeding it to the backbone.Must be a positive integer. Note: training run may get into CUDA OOM if the size is too big.Note: This settings is not supported for the 'yolov5' algorithm.
   */
readonly minSize?: string;

/**
   * Name of the model to use for training.For more information on the available models please visit the official documentation:https://docs.microsoft.com/azure/machine-learning/how-to-auto-train-image-models.
   */
readonly modelName?: string;

/**
   * Model size. Must be 'small', 'medium', 'large', or 'xlarge'.Note: training run may get into CUDA OOM if the model size is too big.Note: This settings is only supported for the 'yolov5' algorithm.
   */
readonly modelSize?: string;

/**
   * Value of momentum when optimizer is 'sgd'. Must be a float in the range [0, 1].
   */
readonly momentum?: string;

/**
   * Enable multi-scale image by varying image size by +/- 50%.Note: training run may get into CUDA OOM if no sufficient GPU memory.Note: This settings is only supported for the 'yolov5' algorithm.
   */
readonly multiScale?: string;

/**
   * Enable nesterov when optimizer is 'sgd'.
   */
readonly nesterov?: string;

/**
   * IOU threshold used during inference in NMS post processing. Must be float in the range [0, 1].
   */
readonly nmsIouThreshold?: string;

/**
   * Number of training epochs. Must be a positive integer.
   */
readonly numberOfEpochs?: string;

/**
   * Number of data loader workers. Must be a non-negative integer.
   */
readonly numberOfWorkers?: string;

/**
   * Type of optimizer. Must be either 'sgd', 'adam', or 'adamw'.
   */
readonly optimizer?: string;

/**
   * Random seed to be used when using deterministic training.
   */
readonly randomSeed?: string;

/**
   * Value of gamma when learning rate scheduler is 'step'. Must be a float in the range [0, 1].
   */
readonly stepLRGamma?: string;

/**
   * Value of step size when learning rate scheduler is 'step'. Must be a positive integer.
   */
readonly stepLRStepSize?: string;

/**
   * The grid size to use for tiling each image. Note: TileGridSize must not beNone to enable small object detection logic. A string containing two integers in mxn format.Note: This settings is not supported for the 'yolov5' algorithm.
   */
readonly tileGridSize?: string;

/**
   * Overlap ratio between adjacent tiles in each dimension. Must be float in the range [0, 1).Note: This settings is not supported for the 'yolov5' algorithm.
   */
readonly tileOverlapRatio?: string;

/**
   * The IOU threshold to use to perform NMS while merging predictions from tiles and image.Used in validation/ inference. Must be float in the range [0, 1].Note: This settings is not supported for the 'yolov5' algorithm.NMS: Non-maximum suppression
   */
readonly tilePredictionsNmsThreshold?: string;

/**
   * Training batch size. Must be a positive integer.
   */
readonly trainingBatchSize?: string;

/**
   * Validation batch size. Must be a positive integer.
   */
readonly validationBatchSize?: string;

/**
   * IOU threshold to use when computing validation metric. Must be float in the range [0, 1].
   */
readonly validationIouThreshold?: string;

/**
   * Metric computation method to use for validation metrics. Must be 'none', 'coco', 'voc', or 'coco_voc'.
   */
readonly validationMetricType?: string;

/**
   * Value of cosine cycle when learning rate scheduler is 'warmup_cosine'. Must be a float in the range [0, 1].
   */
readonly warmupCosineLRCycles?: string;

/**
   * Value of warmup epochs when learning rate scheduler is 'warmup_cosine'. Must be a positive integer.
   */
readonly warmupCosineLRWarmupEpochs?: string;

/**
   * Value of weight decay when optimizer is 'sgd', 'adam', or 'adamw'. Must be a float in the range[0, 1].
   */
readonly weightDecay?: string;

/**
   * [Required] Task type for AutoMLJob.
   */
readonly taskType: 'ImageObjectDetection';

/**
   * [Required] Limit settings for the AutoML job.
   */
readonly limitSettings: ImageLimitSettings;

/**
   * Settings used for training the model.
   */
readonly modelSettings?: ImageModelSettingsObjectDetection;

/**
   * Primary metric to optimize for this task.
   */
readonly primaryMetric?: 'MeanAveragePrecision';

/**
   * Search space for sampling different combinations of models and their hyperparameters.
   */
readonly searchSpace?: ImageModelDistributionSettingsObjectDetection[];

/**
   * Model sweeping and hyperparameter sweeping related settings.
   */
readonly sweepSettings?: ImageSweepSettings;

/**
   * Validation data inputs.
   */
readonly validationData?: MLTableJobInput;

/**
   * The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided.
   */
readonly validationDataSize?: number;

/**
   * [Required] Task type for AutoMLJob.
   */
readonly taskType: 'Regression';

/**
   * Columns to use for CVSplit data.
   */
readonly cvSplitColumnNames?: string[];

/**
   * Featurization inputs needed for AutoML job.
   */
readonly featurizationSettings?: TableVerticalFeaturizationSettings;

/**
   * Execution constraints for AutoMLJob.
   */
readonly limitSettings?: TableVerticalLimitSettings;

/**
   * Number of cross validation folds to be applied on training datasetwhen validation dataset is not provided.
   */
readonly nCrossValidations?: NCrossValidations;

/**
   * Primary metric for regression task.
   */
readonly primaryMetric?: 'NormalizedMeanAbsoluteError''NormalizedRootMeanSquaredError''R2Score''SpearmanCorrelation';

/**
   * Test data input.
   */
readonly testData?: MLTableJobInput;

/**
   * The fraction of test dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided.
   */
readonly testDataSize?: number;

/**
   * Inputs for training phase for an AutoML Job.
   */
readonly trainingSettings?: RegressionTrainingSettings;

/**
   * Validation data inputs.
   */
readonly validationData?: MLTableJobInput;

/**
   * The fraction of training dataset that needs to be set aside for validation purpose.Values between (0.0 , 1.0)Applied when validation dataset is not provided.
   */
readonly validationDataSize?: number;

/**
   * The name of the sample weight column. Automated ML supports a weighted column as an input, causing rows in the data to be weighted up or down.
   */
readonly weightColumnName?: string;

/**
   * Allowed models for regression task.
   */
readonly allowedTrainingAlgorithms?: String array containing any of:'DecisionTree''ElasticNet''ExtremeRandomTrees''GradientBoosting''KNN''LassoLars''LightGBM''RandomForest''SGD''XGBoostRegressor';

/**
   * Blocked models for regression task.
   */
readonly blockedTrainingAlgorithms?: String array containing any of:'DecisionTree''ElasticNet''ExtremeRandomTrees''GradientBoosting''KNN''LassoLars''LightGBM''RandomForest''SGD''XGBoostRegressor';

/**
   * Enable recommendation of DNN models.
   */
readonly enableDnnTraining?: bool;

/**
   * Flag to turn on explainability on best model.
   */
readonly enableModelExplainability?: bool;

/**
   * Flag for enabling onnx compatible models.
   */
readonly enableOnnxCompatibleModels?: bool;

/**
   * Enable stack ensemble run.
   */
readonly enableStackEnsemble?: bool;

/**
   * Enable voting ensemble run.
   */
readonly enableVoteEnsemble?: bool;

/**
   * During VotingEnsemble and StackEnsemble model generation, multiple fitted models from the previous child runs are downloaded.Configure this parameter with a higher value than 300 secs, if more time is needed.
   */
readonly ensembleModelDownloadTimeout?: string;

/**
   * Stack ensemble settings for stack ensemble run.
   */
readonly stackEnsembleSettings?: StackEnsembleSettings;

/**
   * [Required] Task type for AutoMLJob.
   */
readonly taskType: 'TextClassification';

/**
   * Featurization inputs needed for AutoML job.
   */
readonly featurizationSettings?: NlpVerticalFeaturizationSettings;

/**
   * Execution constraints for AutoMLJob.
   */
readonly limitSettings?: NlpVerticalLimitSettings;

/**
   * Primary metric for Text-Classification task.
   */
readonly primaryMetric?: 'AUCWeighted''Accuracy''AveragePrecisionScoreWeighted''NormMacroRecall''PrecisionScoreWeighted';

/**
   * Validation data inputs.
   */
readonly validationData?: MLTableJobInput;

/**
   * Dataset language, useful for the text data.
   */
readonly datasetLanguage?: string;

/**
   * Maximum Concurrent AutoML iterations.
   */
readonly maxConcurrentTrials?: number;

/**
   * Number of AutoML iterations.
   */
readonly maxTrials?: number;

/**
   * AutoML job timeout.
   */
readonly timeout?: string;

/**
   * [Required] Task type for AutoMLJob.
   */
readonly taskType: 'TextClassificationMultilabel';

/**
   * Featurization inputs needed for AutoML job.
   */
readonly featurizationSettings?: NlpVerticalFeaturizationSettings;

/**
   * Execution constraints for AutoMLJob.
   */
readonly limitSettings?: NlpVerticalLimitSettings;

/**
   * Validation data inputs.
   */
readonly validationData?: MLTableJobInput;

/**
   * [Required] Task type for AutoMLJob.
   */
readonly taskType: 'TextNER';

/**
   * Featurization inputs needed for AutoML job.
   */
readonly featurizationSettings?: NlpVerticalFeaturizationSettings;

/**
   * Execution constraints for AutoMLJob.
   */
readonly limitSettings?: NlpVerticalLimitSettings;

/**
   * Validation data inputs.
   */
readonly validationData?: MLTableJobInput;

/**
   * [Required] Specifies the type of job.
   */
readonly jobType: 'Command';

/**
   * ARM resource ID of the code asset.
   */
readonly codeId?: string;

/**
   * [Required] The command to execute on startup of the job. eg. "python train.py"
   */
readonly command: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null.
   */
readonly distribution?: DistributionConfiguration;

/**
   * [Required] The ARM resource ID of the Environment specification for the job.
   */
readonly environmentId: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * Environment variables included in the job.
   */
readonly environmentVariables?: CommandJobEnvironmentVariables;

/**
   * Mapping of input data bindings used in the job.
   */
readonly inputs?: CommandJobInputs;

/**
   * Command Job limit.
   */
readonly limits?: CommandJobLimits;

/**
   * Mapping of output data bindings used in the job.
   */
readonly outputs?: CommandJobOutputs;

/**
   * Queue settings for the job
   */
readonly queueSettings?: QueueSettings;

/**
   * Compute Resource configuration for the job.
   */
readonly resources?: JobResourceConfiguration;

/**
   * Set the object type
   */
readonly distributionType: MpiPyTorchTensorFlow;

/**
   * [Required] Specifies the type of distribution framework.
   */
readonly distributionType: 'Mpi';

/**
   * Number of processes per MPI node.
   */
readonly processCountPerInstance?: number;

/**
   * [Required] Specifies the type of distribution framework.
   */
readonly distributionType: 'PyTorch';

/**
   * Number of processes per node.
   */
readonly processCountPerInstance?: number;

/**
   * [Required] Specifies the type of distribution framework.
   */
readonly distributionType: 'TensorFlow';

/**
   * Number of parameter server tasks.
   */
readonly parameterServerCount?: number;

/**
   * Number of workers. If not specified, will default to the instance count.
   */
readonly workerCount?: number;

/**
   * 
   */
readonly {customized property}?: string;

/**
   * 
   */
readonly {customized property}?: JobInput;

/**
   * Description for the input.
   */
readonly description?: string;

/**
   * Set the object type
   */
readonly jobInputType: custom_modelliteralmlflow_modelmltabletriton_modeluri_fileuri_folder;

/**
   * [Required] Specifies the type of job.
   */
readonly jobInputType: 'custom_model';

/**
   * Input Asset Delivery Mode.
   */
readonly mode?: 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount';

/**
   * [Required] Input Asset URI.
   */
readonly uri: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * [Required] Specifies the type of job.
   */
readonly jobInputType: 'literal';

/**
   * [Required] Literal value for the input.
   */
readonly value: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * [Required] Specifies the type of job.
   */
readonly jobInputType: 'triton_model';

/**
   * Input Asset Delivery Mode.
   */
readonly mode?: 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount';

/**
   * [Required] Input Asset URI.
   */
readonly uri: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * [Required] Specifies the type of job.
   */
readonly jobInputType: 'uri_file';

/**
   * Input Asset Delivery Mode.
   */
readonly mode?: 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount';

/**
   * [Required] Input Asset URI.
   */
readonly uri: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * [Required] Specifies the type of job.
   */
readonly jobInputType: 'uri_folder';

/**
   * Input Asset Delivery Mode.
   */
readonly mode?: 'Direct''Download''EvalDownload''EvalMount''ReadOnlyMount''ReadWriteMount';

/**
   * [Required] Input Asset URI.
   */
readonly uri: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * [Required] JobLimit type.
   */
readonly jobLimitsType: 'Command''Sweep';

/**
   * The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.
   */
readonly timeout?: string;

/**
   * 
   */
readonly {customized property}?: JobOutput;

/**
   * [Required] Specifies the type of job.
   */
readonly jobType: 'Pipeline';

/**
   * Inputs for the pipeline job.
   */
readonly inputs?: PipelineJobInputs;

/**
   * Jobs construct the Pipeline Job.
   */
readonly jobs?: PipelineJobJobs;

/**
   * Outputs for the pipeline job
   */
readonly outputs?: PipelineJobOutputs;

/**
   * Pipeline settings, for things like ContinueRunOnStepFailure etc.
   */
readonly settings?: For Bicep, you can use theany()function.;

/**
   * ARM resource ID of source job.
   */
readonly sourceJobId?: string;

/**
   * 
   */
readonly {customized property}?: JobInput;

/**
   * 
   */
readonly {customized property}?: For Bicep, you can use theany()function.;

/**
   * 
   */
readonly {customized property}?: JobOutput;

/**
   * [Required] Specifies the type of job.
   */
readonly jobType: 'Sweep';

/**
   * Early termination policies enable canceling poor-performing runs before they complete
   */
readonly earlyTermination?: EarlyTerminationPolicy;

/**
   * Mapping of input data bindings used in the job.
   */
readonly inputs?: SweepJobInputs;

/**
   * Sweep Job limit.
   */
readonly limits?: SweepJobLimits;

/**
   * [Required] Optimization objective.
   */
readonly objective: Objective;

/**
   * Mapping of output data bindings used in the job.
   */
readonly outputs?: SweepJobOutputs;

/**
   * Queue settings for the job
   */
readonly queueSettings?: QueueSettings;

/**
   * [Required] The hyperparameter sampling algorithm
   */
readonly samplingAlgorithm: SamplingAlgorithm;

/**
   * [Required] A dictionary containing each parameter and its distribution. The dictionary key is the name of the parameter
   */
readonly searchSpace: For Bicep, you can use theany()function.;

/**
   * [Required] Trial component definition.
   */
readonly trial: TrialComponent;

/**
   * 
   */
readonly {customized property}?: JobInput;

/**
   * [Required] JobLimit type.
   */
readonly jobLimitsType: 'Command''Sweep';

/**
   * Sweep Job max concurrent trials.
   */
readonly maxConcurrentTrials?: number;

/**
   * Sweep Job max total trials.
   */
readonly maxTotalTrials?: number;

/**
   * The max run duration in ISO 8601 format, after which the job will be cancelled. Only supports duration with precision as low as Seconds.
   */
readonly timeout?: string;

/**
   * Sweep Job Trial timeout value.
   */
readonly trialTimeout?: string;

/**
   * [Required] Defines supported metric goals for hyperparameter tuning
   */
readonly goal: 'Maximize''Minimize';

/**
   * [Required] Name of the metric to optimize.
   */
readonly primaryMetric: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * 
   */
readonly {customized property}?: JobOutput;

/**
   * Set the object type
   */
readonly samplingAlgorithmType: BayesianGridRandom;

/**
   * [Required] The algorithm used for generating hyperparameter values, along with configuration properties
   */
readonly samplingAlgorithmType: 'Bayesian';

/**
   * [Required] The algorithm used for generating hyperparameter values, along with configuration properties
   */
readonly samplingAlgorithmType: 'Grid';

/**
   * [Required] The algorithm used for generating hyperparameter values, along with configuration properties
   */
readonly samplingAlgorithmType: 'Random';

/**
   * The specific type of random algorithm
   */
readonly rule?: 'Random''Sobol';

/**
   * An optional integer to use as the seed for random number generation
   */
readonly seed?: number;

/**
   * ARM resource ID of the code asset.
   */
readonly codeId?: string;

/**
   * [Required] The command to execute on startup of the job. eg. "python train.py"
   */
readonly command: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * Distribution configuration of the job. If set, this should be one of Mpi, Tensorflow, PyTorch, or null.
   */
readonly distribution?: DistributionConfiguration;

/**
   * [Required] The ARM resource ID of the Environment specification for the job.
   */
readonly environmentId: string Constranumbers:Min length = 1Pattern =[a-zA-Z0-9_];

/**
   * Environment variables included in the job.
   */
readonly environmentVariables?: TrialComponentEnvironmentVariables;

/**
   * Compute Resource configuration for the job.
   */
readonly resources?: JobResourceConfiguration;

/**
   * 
   */
readonly {customized property}?: string;
}

/**
 *  resource
 */
export class  extends AzAPIBase {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "";
  }

  protected getResourceBody(props: Props): string {
    return JSON.stringify(
        
    );
  }
}
