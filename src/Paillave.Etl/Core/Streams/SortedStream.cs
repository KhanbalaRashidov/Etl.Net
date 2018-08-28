﻿using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Paillave.RxPush.Core;
using Paillave.RxPush.Operators;
using Paillave.Etl.Core.TraceContents;

namespace Paillave.Etl.Core.Streams
{
    public class SortedStream<T> : Stream<T>, ISortedStream<T>
    {
        public SortedStream(ITracer tracer, IExecutionContext executionContext, string sourceNodeName, IPushObservable<T> observable, IEnumerable<SortCriteria<T>> sortCriterias)
            : base(tracer, executionContext, sourceNodeName, observable)
        {
            if (sortCriterias.Count() == 0) throw new ArgumentOutOfRangeException(nameof(sortCriterias), "sorting criteria list cannot be empty");
            this.SortCriterias = new ReadOnlyCollection<SortCriteria<T>>(sortCriterias.ToList());
        }
        public IReadOnlyCollection<SortCriteria<T>> SortCriterias { get; }
    }
}